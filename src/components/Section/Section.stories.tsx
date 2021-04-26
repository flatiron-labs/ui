import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Section, SectionTitle, SectionContent } from '~/components/Section'

export default {
  title: 'Components/Section'
} as Meta

export const Default: Story = () => (
  <Section>
    <SectionContent>
      <p>Test Content</p>
    </SectionContent>
  </Section>
)

export const WithTitle: Story = () => (
  <Section>
    <SectionTitle>Test Title</SectionTitle>

    <SectionContent>
      <p>Test Content</p>
    </SectionContent>
  </Section>
)

export const DynamicSectionLoading: Story = () => (
  <Section>
    <SectionTitle>Test Title</SectionTitle>

    <SectionContent dynamic>
      <p>Test Content</p>
    </SectionContent>
  </Section>
)

export const DynamicSectionError: Story = () => (
  <Section>
    <SectionTitle>Test Title</SectionTitle>

    <SectionContent dynamic error>
      <p>Test Content</p>
    </SectionContent>
  </Section>
)

export const DynamicSectionLoaded: Story = () => (
  <Section>
    <SectionTitle>Test Title</SectionTitle>

    <SectionContent dynamic data>
      <p>Test Content</p>
    </SectionContent>
  </Section>
)

export const Multiple: Story = () => (
  <>
    <Section>
      <SectionTitle>Test Title</SectionTitle>

      <SectionContent dynamic data>
        <p>Test Content</p>
      </SectionContent>
    </Section>
    <Section>
      <SectionTitle>Test Title</SectionTitle>

      <SectionContent dynamic data>
        <p>Test Content</p>
      </SectionContent>
    </Section>
  </>
)

export const CustomLoadingComponent: Story = () => (
  <Section>
    <SectionContent dynamic loadingComponent={<p>[LOADING]</p>}>
      <p>Test Content</p>
    </SectionContent>
  </Section>
)

export const CustomErrorComponent: Story = () => (
  <Section>
    <SectionContent dynamic error errorComponent={<p>[ERROR]</p>}>
      <p>Test Content</p>
    </SectionContent>
  </Section>
)
