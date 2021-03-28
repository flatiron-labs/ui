import { styled } from '~/styles/stitches.config'

export const ResponsiveGrid = styled('div', {
  display: 'grid',
  gridGap: '$7',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
})
