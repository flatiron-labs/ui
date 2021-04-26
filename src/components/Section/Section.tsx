import React from 'react'
import CSSType from 'csstype'

import { styled } from '~/styles/stitches.config'

import { Heading } from '~/components/Typography/Heading'
import { Level } from '~/components/Level'
import { LoadingIndicator } from '~/components/LoadingIndicator'

/* -------------------------------------------------------------------------------------------------
 * SectionStatus
 * -----------------------------------------------------------------------------------------------*/

export const SectionStatus = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

SectionStatus.displayName = 'SectionStatus'

/* -------------------------------------------------------------------------------------------------
 * SectionTitle
 * -----------------------------------------------------------------------------------------------*/

export const SectionTitle = styled(Heading, {
  fontFamily: '$firaCode',
  fontSize: '1.6rem',
  fontWeight: '400',
  lineHeight: '1.235',
  letterSpacing: '0.00735em'
})

SectionTitle.displayName = 'SectionTitle'

/* -------------------------------------------------------------------------------------------------
 * SectionContent
 * -----------------------------------------------------------------------------------------------*/

export const StyledSectionContent = styled('div', {
  width: '100%'
})

type SectionContentProps = React.ComponentPropsWithRef<typeof StyledSectionContent> & {
  data?: unknown
  dynamic?: boolean
  error?: unknown
  minHeight?: CSSType.Property.MinHeight
  loadingComponent?: React.ReactNode
  errorComponent?: React.ReactNode
}

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ children, data, dynamic, error, loadingComponent, errorComponent, minHeight = 0, ...rest }, ref) => {
    const loading = dynamic && !error && !data

    return (
      <StyledSectionContent css={{ minHeight }} {...rest} aria-busy={loading} ref={ref}>
        {dynamic && error && <SectionStatus>{errorComponent ?? <p>An error has occurred.</p>}</SectionStatus>}

        {loading && <SectionStatus>{loadingComponent ?? <LoadingIndicator />}</SectionStatus>}

        {dynamic && data && children}

        {!dynamic && children}
      </StyledSectionContent>
    )
  }
)

SectionContent.toString = () => '.section-content'
SectionContent.displayName = 'SectionContent'

/* -------------------------------------------------------------------------------------------------
 * Section
 * -----------------------------------------------------------------------------------------------*/

const SectionTitleType = (<SectionTitle />).type

export const StyledSection = styled('section', {
  width: '100%'
})

type Props = React.ComponentPropsWithRef<typeof StyledSection>

export const Section = React.forwardRef<HTMLElement, Props>(({ children, ...rest }, ref) => {
  const hasTitle = React.Children.toArray(children).find(
    child => (child as React.ReactElement).type === SectionTitleType
  )

  return hasTitle ? (
    <Level>
      <StyledSection {...rest} ref={ref}>
        {children}
      </StyledSection>
    </Level>
  ) : (
    <StyledSection {...rest} ref={ref}>
      {children}
    </StyledSection>
  )
})

Section.toString = () => '.section'
Section.displayName = 'Section'
