import React from 'react'
import { Story, Meta } from '@storybook/react'

import { User } from 'phosphor-react'

import { ResponsiveGrid } from '~/components/ResponsiveGrid'
import { InfoSnippet, InfoSnippetContent, InfoSnippetDetails, InfoSnippetTitle } from '.'

export default {
  title: 'Components/InfoSnippet',
  component: InfoSnippet
} as Meta

type Args = {
  title: string
  content: string
}

const Template: Story = ({ title, content }: Args) => (
  <InfoSnippet>
    <User />

    <InfoSnippetDetails>
      <InfoSnippetTitle>{title}</InfoSnippetTitle>
      <InfoSnippetContent>{content}</InfoSnippetContent>
    </InfoSnippetDetails>
  </InfoSnippet>
)

const MultipleTemplate: Story = ({ title, content }: Args) => (
  <ResponsiveGrid gap={0}>
    <InfoSnippet>
      <User />

      <InfoSnippetDetails>
        <InfoSnippetTitle>{title}</InfoSnippetTitle>
        <InfoSnippetContent>{content}</InfoSnippetContent>
      </InfoSnippetDetails>
    </InfoSnippet>
    <InfoSnippet>
      <User />

      <InfoSnippetDetails>
        <InfoSnippetTitle>Biography:</InfoSnippetTitle>
        <InfoSnippetContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus maximus vulputate. Quisque
          blandit neque in efficitur dictum. Ut facilisis posuere sodales. Suspendisse potenti. Ut molestie nibh sed
          nibh finibus, a malesuada turpis posuere. Proin posuere risus ac mauris dictum sollicitudin. Nullam fringilla
          commodo risus, vel ultricies odio facilisis ac. Curabitur sed libero tristique, vulputate ipsum quis,
          pellentesque velit.
        </InfoSnippetContent>
      </InfoSnippetDetails>
    </InfoSnippet>
  </ResponsiveGrid>
)

export const Default: Story = Template.bind({})
Default.args = {
  title: 'Full Name:',
  content: 'John Snow'
}

export const Multiple = MultipleTemplate.bind({})
Multiple.args = {
  title: 'Full Name:',
  content: 'John Snow'
}
