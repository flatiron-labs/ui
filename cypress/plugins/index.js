/* eslint-disable no-console */

// Used by cypress-axe for console reporting
module.exports = on => {
  on('task', {
    log(message) {
      console.log(message)

      return null
    },
    table(message) {
      console.table(message)

      return null
    }
  })
}
