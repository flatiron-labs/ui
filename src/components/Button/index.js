import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${props =>
    props.primary && `
      color: red;
      background-color: #1ea7fd;
    `
  }

  ${props =>
    !props.primary && `
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `
  }

  ${props =>
    props.size === SIZES.SMALL && `
      font-size: 12px;
      padding: 10px 16px;
    `
  }

  ${props =>
    props.size === SIZES.MEDIUM && `
      font-size: 14px;
      padding: 11px 20px;
    `
  }

  ${props =>
    props.size === SIZES.LARGE && `
      font-size: 16px;
      padding: 12px 24px;
    `
  }

  ${props => `background-color: ${props.backgroundColor};`}
`

export const Button = ({ label, ...props }) => {
  return <StyledButton {...props}>{label}</StyledButton>
}

// -----------------------------------------------------------

const buttonStyledProps = {
  backgroundColor: PropTypes.string, // What background color to use
  primary: PropTypes.bool, // Is this the principal call to action on the page?
  size: PropTypes.oneOf(Object.values(SIZES)) // How large should the button be?
}

const buttonStyleDefaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium'
}

StyledButton.propTypes = {
  ...buttonStyledProps
}

StyledButton.defaultProps = {
  ...buttonStyleDefaultProps
}

Button.propTypes = {
  ...buttonStyledProps,
  label: PropTypes.string.isRequired, // Button contents
  onClick: PropTypes.func, // Optional click handler
}

Button.defaultProps = {
  onClick: undefined,
  ...buttonStyleDefaultProps
}
