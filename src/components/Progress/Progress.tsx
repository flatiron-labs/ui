import React, { ReactElement } from 'react'
import styled from 'styled-components'

export interface ProgressProps {
  activeColor?: string
  complete?: number
  'data-testid'?: string
  fillColor?: boolean
  label?: string
  total?: number
}

const Label = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ItemContainer = styled.div`
  padding-right: 5px;
`

const StyledProgress = styled.div<ProgressProps>`
  background-color: ${props => (props.fillColor ? props.activeColor : '#5C5C5C')};
  border-radius: 50%;
  height: 5px;
  width: 5px;
`

const createProgress = (complete: number, total: number, activeColor: string) => {
  let progressBar: Array<ReactElement> = []

  for (let i = 0; i < total; i += 1) {
    const fill = complete > i
    progressBar.push(
      <ItemContainer>
        <StyledProgress fillColor={fill} activeColor={activeColor} />
      </ItemContainer>
    )
  }
  return progressBar
}

export const Progress = ({ ...props }: ProgressProps): JSX.Element => {
  const { activeColor, complete, total, label, 'data-testid': dataTestId } = props
  return (
    <div data-testid={dataTestId}>
      {label && <Label>{label}</Label>}
      <Container>{createProgress(complete, total, activeColor)}</Container>
    </div>
  )
}
