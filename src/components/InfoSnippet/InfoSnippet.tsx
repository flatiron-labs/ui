// import React from 'react'

import { styled } from '~/styles/stitches.config'

/* -------------------------------------------------------------------------------------------------
 * InfoSnippetDetails
 * -----------------------------------------------------------------------------------------------*/

export const InfoSnippetDetails = styled('div', {
  display: 'grid',
  fontSize: '18px',
  gap: '$4',
  gridTemplateColumns: '1fr',
  lineHeight: '$750',

  '@sm': {
    gridTemplateColumns: 'fit-content(300px) minmax(0px, 1fr)'
  }
})

/* -------------------------------------------------------------------------------------------------
 * InfoSnippetTitle
 * -----------------------------------------------------------------------------------------------*/

export const InfoSnippetTitle = styled('div', {
  color: '$white500',
  fontWeight: '$bold'
})

/* -------------------------------------------------------------------------------------------------
 * InfoSnippetContent
 * -----------------------------------------------------------------------------------------------*/

export const InfoSnippetContent = styled('div', {
  color: '$grey750'
})

/* -------------------------------------------------------------------------------------------------
 * InfoSnippet
 * -----------------------------------------------------------------------------------------------*/

export const InfoSnippet = styled('div', {
  borderBottomColor: '$grey1000',
  borderBottomStyle: 'dashed',
  borderBottomWidth: '2px',
  display: 'grid',
  gap: '$7',
  gridTemplateColumns: 'fit-content(48px) 1fr',
  padding: '$7 $2'
})
InfoSnippet.displayName = 'InfoSnippet'
