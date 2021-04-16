import React from 'react'
import styled from 'styled-components'
import * as RadixProgress from '@radix-ui/react-progress'
import { flatironTheme } from '~/styles'

export interface ProgressProps {
  color?: string
  complete?: number
  'data-testid'?: string
  label?: string
  total?: number
}

interface StyledProgressProps {
  percent?: number | string
}

const StyledProgress = styled(RadixProgress.Root)`
  position: relative;
  height: 10px;
  overflow: hidden;
  border-radius: 5px;
  background-color: ${flatironTheme.colors.common.greyDark};
`
const StyledIndicator = styled(RadixProgress.Indicator)<ProgressProps & StyledProgressProps>`
  box-sizing: border-box;
  position: absolute;
  background-color: ${props => (props.color ? props.color : '#5C5C5C')};
  height: 100%;
  width: ${props => (props.percent ? `${props.percent}%` : 0)};
`

export const Progress = ({ ...props }: ProgressProps): JSX.Element => {
  const { color, complete, total, 'data-testid': dataTestId } = props
  const percent = (complete / total) * 100
  return (
    <StyledProgress aria-label="progressbar" role="progressbar" value={50} data-testid={dataTestId}>
      <StyledIndicator color={color} percent={percent} />
    </StyledProgress>
  )
}
