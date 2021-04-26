import React from 'react'
import * as RadixProgress from '@radix-ui/react-progress'

import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * ProgressIndicator
 * -----------------------------------------------------------------------------------------------*/

const ProgressIndicator = styled(RadixProgress.Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  height: '100%',
  width: 0
})

/* -------------------------------------------------------------------------------------------------
 * Progress
 * -----------------------------------------------------------------------------------------------*/

const StyledProgressBar = styled(RadixProgress.Root, {
  position: 'relative',
  height: '10px',
  overflow: 'hidden',
  borderRadius: '5px',
  backgroundColor: '$grey750',

  [`& ${ProgressIndicator}`]: {
    backgroundColor: '#5C5C5C'
  },

  variants: {
    progressColor: {
      pink: {
        [`& ${ProgressIndicator}`]: {
          backgroundColor: '$pink500'
        }
      },
      purple: {
        [`& ${ProgressIndicator}`]: {
          backgroundColor: '$purple500'
        }
      },
      cyan: {
        [`& ${ProgressIndicator}`]: {
          backgroundColor: '$cyan500'
        }
      },
      yellow: {
        [`& ${ProgressIndicator}`]: {
          backgroundColor: '$yellow500'
        }
      }
    }
  }
})

type Props = React.ComponentPropsWithRef<typeof StyledProgressBar> & {
  label: string
}

export const ProgressBar = React.forwardRef<HTMLDivElement, Props>(({ value, max, label, ...rest }, ref) => (
  <StyledProgressBar {...rest} value={value} max={max} aria-label={label} ref={ref}>
    <ProgressIndicator css={{ width: `${(value / max) * 100}%` }} />
  </StyledProgressBar>
))

ProgressBar.toString = () => '.progressbar'
ProgressBar.displayName = 'ProgressBar'
