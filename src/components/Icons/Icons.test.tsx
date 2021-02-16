import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Code, Dial, Exit, Hamburger, Github, Home, Location, Lock, Mail, Map, Settings, Time, User } from './index'

describe('Icons', () => {
  afterEach(cleanup)

  // code icon
  it('displays Code Icon', () => {
    const { container } = render(<Code color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Code Icon with no args', () => {
    const { container } = render(<Code />)
    expect(container).toBeInTheDocument()
  })

  it('displays Code Icon with data-testid', () => {
    const { getByTestId } = render(<Code data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Dial icon
  it('displays Dial Icon', () => {
    const { container } = render(<Dial color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Dial Icon with no args', () => {
    const { container } = render(<Dial />)
    expect(container).toBeInTheDocument()
  })

  it('displays Dial Icon with data-testid', () => {
    const { getByTestId } = render(<Dial data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Exit icon
  it('displays Exit Icon', () => {
    const { container } = render(<Exit color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Exit Icon with no args', () => {
    const { container } = render(<Exit />)
    expect(container).toBeInTheDocument()
  })

  it('displays Exit Icon with data-testid', () => {
    const { getByTestId } = render(<Exit data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Github icon
  it('displays Github Icon', () => {
    const { container } = render(<Github color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Github Icon with no args', () => {
    const { container } = render(<Github />)
    expect(container).toBeInTheDocument()
  })

  it('displays Github Icon with data-testid', () => {
    const { getByTestId } = render(<Github data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Hamburger icon
  it('displays Hamburger Icon', () => {
    const { container } = render(<Hamburger color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Hamburger Icon with no args', () => {
    const { container } = render(<Hamburger />)
    expect(container).toBeInTheDocument()
  })

  it('displays Hamburger Icon with data-testid', () => {
    const { getByTestId } = render(<Hamburger data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Home icon
  it('displays Home Icon', () => {
    const { container } = render(<Home color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Home Icon with no args', () => {
    const { container } = render(<Home />)
    expect(container).toBeInTheDocument()
  })

  it('displays Home Icon with data-testid', () => {
    const { getByTestId } = render(<Home data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Location icon
  it('displays Location Icon', () => {
    const { container } = render(<Location color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Location Icon with no args', () => {
    const { container } = render(<Location />)
    expect(container).toBeInTheDocument()
  })

  it('displays Location Icon with data-testid', () => {
    const { getByTestId } = render(<Location data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Lock icon
  it('displays Lock Icon', () => {
    const { container } = render(<Lock color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Lock Icon with no args', () => {
    const { container } = render(<Lock />)
    expect(container).toBeInTheDocument()
  })

  it('displays Lock Icon with data-testid', () => {
    const { getByTestId } = render(<Lock data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Mail icon
  it('displays Mail Icon', () => {
    const { container } = render(<Mail color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Mail Icon with no args', () => {
    const { container } = render(<Mail />)
    expect(container).toBeInTheDocument()
  })

  it('displays Mail Icon with data-testid', () => {
    const { getByTestId } = render(<Mail data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Map icon
  it('displays Map Icon', () => {
    const { container } = render(<Map color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Map Icon with no args', () => {
    const { container } = render(<Map />)
    expect(container).toBeInTheDocument()
  })

  it('displays Map Icon with data-testid', () => {
    const { getByTestId } = render(<Map data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Settings icon
  it('displays Settings Icon', () => {
    const { container } = render(<Settings color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Settings Icon with no args', () => {
    const { container } = render(<Settings />)
    expect(container).toBeInTheDocument()
  })

  it('displays Settings Icon with data-testid', () => {
    const { getByTestId } = render(<Settings data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // Time icon
  it('displays Time Icon', () => {
    const { container } = render(<Time color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays Time Icon with no args', () => {
    const { container } = render(<Time />)
    expect(container).toBeInTheDocument()
  })

  it('displays Time Icon with data-testid', () => {
    const { getByTestId } = render(<Time data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })

  // User icon
  it('displays User Icon', () => {
    const { container } = render(<User color="white" />)
    expect(container).toBeInTheDocument()
  })

  it('displays User Icon with no args', () => {
    const { container } = render(<User />)
    expect(container).toBeInTheDocument()
  })

  it('displays User Icon with data-testid', () => {
    const { getByTestId } = render(<User data-testid="testid" />)
    expect(getByTestId(/testid/i)).toBeInTheDocument()
  })
})
