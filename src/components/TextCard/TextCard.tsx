import React from 'react'
import { styled } from '~/styles/stitches.config'

import { Level } from '~/components/Level'
import { Heading } from '~/components/Typography/Heading'

/* -------------------------------------------------------------------------------------------------
 * TextCardTitle
 * -----------------------------------------------------------------------------------------------*/

export const TextCardTitle = styled(Heading, {
  color: '$cyan500',
  fontFamily: '$firaCode',
  fontWeight: '$regular',
  fontSize: '$80',
  letterSpacing: '0.00735em'
})

/* -------------------------------------------------------------------------------------------------
 * TextCardContent
 * -----------------------------------------------------------------------------------------------*/

export const TextCardContent = styled('div', {
  fontFamily: '$firaCode',
  fontWeight: '$regular',
  fontSize: '$30',
  letterSpacing: '0.00938em'
})

/* -------------------------------------------------------------------------------------------------
 * StyledTextCard
 * -----------------------------------------------------------------------------------------------*/

const StyledTextCard = styled('div', {
  border: '2px solid $blue1000',
  display: 'grid',
  gap: '$5',
  padding: '$5'
})

/* -------------------------------------------------------------------------------------------------
 * TextCard
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof StyledTextCard>

export const TextCard = React.forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => (
  <Level>
    <StyledTextCard ref={ref} {...rest}>
      {children}
    </StyledTextCard>
  </Level>
))
TextCard.displayName = 'TextCard'
