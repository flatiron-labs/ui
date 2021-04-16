import React from 'react'
import { styled } from '~/styles'

/* -------------------------------------------------------------------------------------------------
 * SVGContainer
 * -----------------------------------------------------------------------------------------------*/

const SVGContainer = styled('svg', {
  display: 'block',
  height: '80px',
  width: '80px'
})

/* -------------------------------------------------------------------------------------------------
 * LoadingIndicator
 * -----------------------------------------------------------------------------------------------*/

type Props = React.ComponentPropsWithRef<typeof SVGContainer>

export const LoadingIndicator = React.forwardRef<SVGSVGElement, Props>(({ ...props }, ref) => (
  <SVGContainer xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" role="status" ref={ref} {...props}>
    <defs />
    <rect width="6" height="4" x="47" y="28" fill="#f9ed1a" rx="0" ry="0">
      <animate
        attributeName="opacity"
        begin="-0.9166666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#ff5c00" rx="0" ry="0" transform="rotate(30 50 50)">
      <animate
        attributeName="opacity"
        begin="-0.8333333333333334s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#ff006b" rx="0" ry="0" transform="rotate(60 50 50)">
      <animate attributeName="opacity" begin="-0.75s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#00efe1" rx="0" ry="0" transform="rotate(90 50 50)">
      <animate
        attributeName="opacity"
        begin="-0.6666666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#cda2ff" rx="0" ry="0" transform="rotate(120 50 50)">
      <animate
        attributeName="opacity"
        begin="-0.5833333333333334s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#338fff" rx="0" ry="0" transform="rotate(150 50 50)">
      <animate attributeName="opacity" begin="-0.5s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#00ef7c" rx="0" ry="0" transform="rotate(180 50 50)">
      <animate
        attributeName="opacity"
        begin="-0.4166666666666667s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#f9ed1a" rx="0" ry="0" transform="rotate(210 50 50)">
      <animate
        attributeName="opacity"
        begin="-0.3333333333333333s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#ff5c00" rx="0" ry="0" transform="rotate(240 50 50)">
      <animate attributeName="opacity" begin="-0.25s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#ff006b" rx="0" ry="0" transform="rotate(270 50 50)">
      <animate
        attributeName="opacity"
        begin="-0.16666666666666666s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#00efe1" rx="0" ry="0" transform="rotate(300 50 50)">
      <animate
        attributeName="opacity"
        begin="-0.08333333333333333s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect width="6" height="4" x="47" y="28" fill="#cda2ff" rx="0" ry="0" transform="rotate(330 50 50)">
      <animate attributeName="opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" />
    </rect>
  </SVGContainer>
))

LoadingIndicator.displayName = 'LoadingIndicator'
