/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

module.exports = (on, config) => {
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
