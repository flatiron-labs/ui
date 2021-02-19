// import React, { useState } from 'react'
// import Slide from '@material-ui/core/Slide'
// import { useTheme } from '@material-ui/core/styles'
// import { Story, Meta } from '@storybook/react'
// import { Grid, Icon, Toggle, Hidden } from '~/components'

// export default {
//   title: 'Examples/Test'
// } as Meta

// // https://material-ui.com/components/grid/

// const Template: Story = () => {
//   const theme = useTheme()
//   const [sidebarExpanded, setSidebarExpanded] = useState(false)
//   const handleClick = event => {
//     setSidebarExpanded(!sidebarExpanded)
//   }

//   return (
//     <Grid container style={{ height: '100vh' }}>
//       <Grid container wrap="nowrap" style={{ backgroundColor: 'blue' }}>
//         <Grid
//           container
//           xs={sidebarExpanded === true ? 12 : 0}
//           style={{
//             backgroundColor: 'green',
//             transition: theme.transitions.create('all', {
//               easing: theme.transitions.easing.sharp,
//               duration: theme.transitions.duration.leavingScreen
//             })
//           }}
//         >
//           <Hidden smUp>
//             <button type="button" onClick={handleClick}>
//               <Icon.Hamburger />
//             </button>
//           </Hidden>

//           <Grid container component="nav" direction="column">
//             <a href="#">Test</a>
//             <a href="#">Test</a>
//             <a href="#">Test</a>
//             <a href="#">Test</a>
//             <a href="#">Test</a>
//           </Grid>
//         </Grid>

//         <Grid
//           item
//           zeroMinWidth
//           xs={sidebarExpanded === true ? 0 : 9}
//           style={{
//             visibility: sidebarExpanded === true ? 'collapse' : '',
//             opacity: sidebarExpanded === true ? 0 : 1,
//             transition: theme.transitions.create('all', {
//               easing: theme.transitions.easing.sharp,
//               duration: theme.transitions.duration.leavingScreen
//             })
//           }}
//         >
//           <Toggle label="Side 1" />
//           <Toggle label="Side 2" />
//         </Grid>

//         {/* <Slide direction="left" in={!sidebarExpanded}>
//           <Grid item>
//             <Toggle label="Side 1" />
//             <Toggle label="Side 2" />
//           </Grid>
//         </Slide> */}
//       </Grid>

//       <Grid item style={{ backgroundColor: 'purple' }} xs={12}>
//         <p>Footer</p>
//       </Grid>
//     </Grid>
//   )
// }

// export const Default = Template.bind({})

import React from 'react'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Examples/Test'
} as Meta

const Template: Story = () => <p>Test</p>
export const Default = Template.bind({})
