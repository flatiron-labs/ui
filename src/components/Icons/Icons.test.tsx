import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Icon } from '..'

describe('Icons', () => {
  afterEach(cleanup)

  // code icon
  it('displays Code Icon', () => {
    const { container } = render(<Icon.Code color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Code Icon with no args', () => {
    const { container } = render(<Icon.Code />)
    expect(container).toBeInTheDocument()
  })

  it('displays Code Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Code data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Dial icon
  it('displays Dial Icon', () => {
    const { container } = render(<Icon.Dial color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Dial Icon with no args', () => {
    const { container } = render(<Icon.Dial />)
    expect(container).toBeInTheDocument()
  })

  it('displays Dial Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Dial data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Exit icon
  it('displays Exit Icon', () => {
    const { container } = render(<Icon.Exit color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Exit Icon with no args', () => {
    const { container } = render(<Icon.Exit />)
    expect(container).toBeInTheDocument()
  })

  it('displays Exit Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Exit data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Github icon
  it('displays Github Icon', () => {
    const { container } = render(<Icon.Github color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Github Icon with no args', () => {
    const { container } = render(<Icon.Github />)
    expect(container).toBeInTheDocument()
  })

  it('displays Github Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Github data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Hamburger icon
  it('displays Hamburger Icon', () => {
    const { container } = render(<Icon.Hamburger color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Hamburger Icon with no args', () => {
    const { container } = render(<Icon.Hamburger />)
    expect(container).toBeInTheDocument()
  })

  it('displays Hamburger Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Hamburger data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Home icon
  it('displays Home Icon', () => {
    const { container } = render(<Icon.Home color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Home Icon with no args', () => {
    const { container } = render(<Icon.Home />)
    expect(container).toBeInTheDocument()
  })

  it('displays Home Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Home data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Location icon
  it('displays Location Icon', () => {
    const { container } = render(<Icon.Location color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Location Icon with no args', () => {
    const { container } = render(<Icon.Location />)
    expect(container).toBeInTheDocument()
  })

  it('displays Location Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Location data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Lock icon
  it('displays Lock Icon', () => {
    const { container } = render(<Icon.Lock color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Lock Icon with no args', () => {
    const { container } = render(<Icon.Lock />)
    expect(container).toBeInTheDocument()
  })

  it('displays Lock Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Lock data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Mail icon
  it('displays Mail Icon', () => {
    const { container } = render(<Icon.Mail color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Mail Icon with no args', () => {
    const { container } = render(<Icon.Mail />)
    expect(container).toBeInTheDocument()
  })

  it('displays Mail Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Mail data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Map icon
  it('displays Map Icon', () => {
    const { container } = render(<Icon.Map color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Map Icon with no args', () => {
    const { container } = render(<Icon.Map />)
    expect(container).toBeInTheDocument()
  })

  it('displays Map Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Map data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Settings icon
  it('displays Settings Icon', () => {
    const { container } = render(<Icon.Settings color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Settings Icon with no args', () => {
    const { container } = render(<Icon.Settings />)
    expect(container).toBeInTheDocument()
  })

  it('displays Settings Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Settings data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Time icon
  it('displays Time Icon', () => {
    const { container } = render(<Icon.Time color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Time Icon with no args', () => {
    const { container } = render(<Icon.Time />)
    expect(container).toBeInTheDocument()
  })

  it('displays Time Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.Time data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // User icon
  it('displays User Icon', () => {
    const { container } = render(<Icon.User color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays User Icon with no args', () => {
    const { container } = render(<Icon.User />)
    expect(container).toBeInTheDocument()
  })

  it('displays User Icon with data-testid', () => {
    const { getByTestId } = render(<Icon.User data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })
})
