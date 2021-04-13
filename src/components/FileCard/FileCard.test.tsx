import React from 'react'
import { render, screen } from '~/test/utils'
import { FileCard } from '~/components/FileCard'

describe('<FileCard />', () => {
  const testid = 'filecard'
  const link = 'http://localhost/'
  const props = {
    cta: 'Upload',
    secondary: {
      title: 'Assigned',
      description: '1/2/2022'
    },
    tertiary: {
      title: 'Completed',
      description: '1/3/2023'
    },
    title: 'title_of_resume.pdf',
    type: 'Resume',
    'data-testid': testid
  }

  describe('all information', () => {
    it('should render appropriate elements', () => {
      render(<FileCard {...props} />)

      screen.getByText(props.title)
      screen.getByText(props.type)
      screen.getByText(props.cta)
      screen.getByText(props.secondary.title)
      screen.getByText(props.secondary.description)

      screen.getByText(props.tertiary.title)
      screen.getByText(props.tertiary.description)

      // expect(screen.getByTestId(testid)).toMatchSnapshot()
    })
  })

  describe('no title', () => {
    it('should render appropriate elements', () => {
      render(<FileCard {...props} title={undefined} />)

      screen.getByText('No Upload')
      // expect(screen.getByTestId(testid)).toMatchSnapshot()
    })
  })

  describe('no secondary information', () => {
    it('should render appropriate elements', () => {
      render(<FileCard {...props} secondary={undefined} />)
      // expect(screen.getByTestId(testid)).toMatchSnapshot()
    })
  })

  describe('no teritiary information', () => {
    it('should render appropriate elements', () => {
      render(<FileCard {...props} tertiary={undefined} />)
      // expect(screen.getByTestId(testid)).toMatchSnapshot()
    })
  })

  it('should pass ref to cta', () => {
    const ref = React.createRef<HTMLAnchorElement>()

    render(<FileCard {...props} href={link} ref={ref} data-testid={undefined} />)
    // expect(ref.current.href).toEqual(link)
  })
})
