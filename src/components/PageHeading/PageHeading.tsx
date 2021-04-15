import React from 'react'
import { Heading } from '~/components/Typography/Heading'
import { Level } from '~/components/Level'
import { styled } from '~/styles/stitches.config'
import { textOnlyChild } from '~/utils/textOnlyChild'

export const StyledPageHeading = styled('div', {
  display: 'grid',
  gap: '$7'
})
StyledPageHeading.displayName = 'PageHeading'

export const PageHeadingTitle = styled(Heading, {
  all: 'unset',
  color: '$white500',
  display: 'block',
  fontFamily: '$firaCode',
  fontSize: '2.5rem',
  fontWeight: '$light',
  letterSpacing: '-$6',
  lineHeight: '1.167em'
})
PageHeadingTitle.displayName = 'PageHeadingTitle'

const StyledPageHeadingSubtitle = styled(Heading, {
  all: 'unset',
  color: '$white500',
  display: 'inline-flex',
  flexWrap: 'wrap',
  fontFamily: '$firaCode',
  fontSize: '$70',
  fontWeight: '$regular',
  letterSpacing: '-$6',
  lineHeight: '1.334em'
})
StyledPageHeadingSubtitle.displayName = 'StyledPageHeadingSubtitle'

export const PageHeadingContent = styled('span', {
  marginRight: '$7',

  '&:last-child': {
    marginRight: '0'
  },

  variants: {
    highlight: {
      true: {
        color: '$yellow500'
      }
    }
  }
})
PageHeadingContent.displayName = 'PageHeadingContent'

export const PageHeadingSubtitle = React.forwardRef<HTMLHeadingElement, StitchesComponent<typeof Heading>>(
  ({ children, ...rest }, ref) => (
    <Level>
      <StyledPageHeadingSubtitle ref={ref} {...rest}>
        {textOnlyChild(children) ? <PageHeadingContent highlight>{children}</PageHeadingContent> : children}
      </StyledPageHeadingSubtitle>
    </Level>
  )
)
PageHeadingSubtitle.displayName = 'PageHeadingSubtitle'

export const PageHeading = React.forwardRef<HTMLDivElement, StitchesComponent<typeof StyledPageHeading>>(
  ({ children, ...rest }, ref) => (
    <StyledPageHeading ref={ref} {...rest}>
      {textOnlyChild(children) ? <PageHeadingTitle>{children}</PageHeadingTitle> : children}
    </StyledPageHeading>
  )
)
PageHeading.displayName = 'PageHeading'
