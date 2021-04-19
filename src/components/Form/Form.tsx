import React from 'react'
import { AnyObjectSchema } from 'yup'
import { useForm, FormProvider } from 'react-hook-form'

import { formValidationResolver } from '~/utils/formValidationResolver'
import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * StyledForm
 * -----------------------------------------------------------------------------------------------*/

const StyledForm = styled('form', {
  display: 'grid',
  gap: '2em'
})

/* -------------------------------------------------------------------------------------------------
 * Form
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof StyledForm> & {
  readonly defaultValues: Record<string, unknown>
  readonly label: string
  readonly schema: AnyObjectSchema
}

export const Form = React.forwardRef<HTMLFormElement, Props>(
  ({ defaultValues, children, onSubmit, label, schema, ...rest }, ref) => {
    const methods = useForm({
      defaultValues,
      resolver: formValidationResolver(schema),
      mode: 'onChange'
    })

    return (
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)} aria-label={label} {...rest} ref={ref}>
          {children}
        </StyledForm>
      </FormProvider>
    )
  }
)
