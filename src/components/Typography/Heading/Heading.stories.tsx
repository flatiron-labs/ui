import React from 'react'
import { Meta } from '@storybook/react'
import { Heading } from '.'

import { Level } from '~/context'

export default {
  title: 'Typography/Heading',
  component: Heading
} as Meta

export const DefinedHeadingLevels: React.VFC = () => (
  <div>
    <p style={{ color: 'red' }}>
      Usage of the `level` prop is frowned upon and could lead to accessibility issues. It should be used sparingly and
      only in scenarios where content is not dynamic and the developer can always ensure the order of headings is
      semantically correct.
    </p>
    <Heading level={1}>Heading Level: 1</Heading>
    <Heading level={2}>Heading Level: 2</Heading>
    <Heading level={3}>Heading Level: 3</Heading>
    <Heading level={4}>Heading Level: 4</Heading>
    <Heading level={5}>Heading Level: 5</Heading>
    <Heading level={6}>Heading Level: 6</Heading>
  </div>
)

export const ContextualHeadingLevels: React.VFC = () => (
  <>
    <Heading>Heading Level: 1</Heading>

    <Level>
      <Heading>Heading Level: 2</Heading>
      <Level>
        <Heading>Heading Level: 3</Heading>
        <Heading>Heading Level: 3</Heading>
      </Level>

      <Heading>Heading Level: 2</Heading>
    </Level>
  </>
)
