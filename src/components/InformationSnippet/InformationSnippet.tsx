import React from 'react'
import styled from 'styled-components'
import { Icon } from '~/components'
import { useTheme } from '~/context'
import { Media, ThemeProps } from '~/styles'

const Container = styled.div<ThemeProps>`
  border-bottom: 2px dashed ${props => props.theme.colors.common.greyDarkest};
  display: flex;
  align-items: flex-start;
  direction: row;
  padding-bottom: 20px;
  padding-top: 20px;

  div {
    margin-left: 20px;
    font-size: 18px;
    line-height: 1.5em;
    color: ${props => props.theme.colors.common.greyDark};

    span {
      font-size: 19px;
      font-weight: bold;
      color: ${props => props.theme.colors.common.white};
      display: block;
      margin-bottom: 0.5em;
    }
  }

  ${Media.sm} {
    align-items: center;

    div span {
        display: inline;
        margin-bottom: 0;
      }
    }
  }
`

export interface InformationSnippetProps {
  icon: string
  title: string
  details: string
}

export const InformationSnippet = ({ icon, title, details, ...props }: InformationSnippetProps): JSX.Element => {
  const SelectedIcon = Icon[icon]
  const theme = useTheme()

  return (
    <Container theme={theme} {...props}>
      <SelectedIcon color={theme.colors.common.white} />
      <div>
        <span>{title}: </span>
        {details}
      </div>
    </Container>
  )
}
