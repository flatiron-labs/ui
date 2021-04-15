import React from 'react'
import Yup from 'yup'
import { useForm, Resolver, transformToNestObject, FieldValues, FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import { styled } from '~/styles/stitches.config'

const parseErrorSchema = (error: Yup.ValidationError, validateAllFieldCriteria: boolean) =>
  Array.isArray(error.inner) && error.inner.length
    ? error.inner.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (previous: Record<string, any>, { path, message, type }) => {
          const previousTypes = (previous[path] && previous[path].types) || {}
          const key = path || type

          return {
            ...previous,
            ...(key
              ? {
                  [key]: {
                    ...(previous[key] || {
                      message,
                      type
                    }),
                    ...(validateAllFieldCriteria
                      ? {
                          types: {
                            ...previousTypes,
                            [type]: previousTypes[type] ? [...[].concat(previousTypes[type]), message] : message
                          }
                        }
                      : {})
                  }
                }
              : {})
          }
        },
        {}
      )
    : {
        [error.path]: { message: error.message, type: error.type }
      }

type ValidateOptions<T extends Yup.AnyObjectSchema> = Parameters<T['validate']>[1]

const yupResolver = <TFieldValues extends FieldValues>(
  schema: Yup.AnyObjectSchema,
  options: ValidateOptions<Yup.AnyObjectSchema> = {
    abortEarly: false
  }
): Resolver<TFieldValues> => async (values, context, validateAllFieldCriteria = false) => {
  try {
    if (options.context && process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn("You should not use the yup options context. Please, use the 'useForm' context object instead")
    }

    return {
      values: await schema.validate(values, {
        ...options,
        context
      }),
      errors: {}
    }
  } catch (e) {
    const parsedErrors = parseErrorSchema(e, validateAllFieldCriteria)

    return {
      values: {},
      errors: transformToNestObject(parsedErrors)
    }
  }
}

type RefElement = typeof FormGrid
type Props = {
  defaultValues: Record<string, unknown>
  label: string
  schema: Yup.AnyObjectSchema
  debug?: boolean
} & StitchesComponent<RefElement>

const FormGrid = styled('form', {
  display: 'grid',
  gap: '2em'
})

export const Form = React.forwardRef<RefElement, Props>(
  ({ defaultValues, children, onSubmit, label, schema, debug, ...rest }) => {
    const methods = useForm({
      defaultValues,
      resolver: yupResolver(schema),
      mode: 'onChange'
    })

    return (
      <FormProvider {...methods}>
        {debug ? <DevTool control={methods.control} /> : null}
        <FormGrid onSubmit={methods.handleSubmit(onSubmit)} aria-label={label} {...rest}>
          {children}
        </FormGrid>
      </FormProvider>
    )
  }
)
