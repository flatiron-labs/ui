/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.overwrite('visit', (originalFn, id, options) =>
//   originalFn(`http://localhost:6006/iframe.html?id=${id}`, options)
// )

import { terminalLog } from './terminalLog'

let sbPrefix

Cypress.Commands.add('prefix', prefix => {
  sbPrefix = `${prefix}--`
})

Cypress.Commands.add('unsetPrefix', () => {
  sbPrefix = undefined
})

Cypress.Commands.add('sb', (id, options) => {
  cy.visit(`/iframe.html?viewMode=story&id=${sbPrefix}${id}`, options)
  cy.injectAxe()
})

Cypress.Commands.add('a11y', () => {
  cy.checkA11y(
    '#root',
    {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag2aaa', 'section508']
      }
    },
    terminalLog
  )
})
