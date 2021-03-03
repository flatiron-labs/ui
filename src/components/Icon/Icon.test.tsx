import React from 'react'
import { render, screen } from '~/test/utils'
import { Icon } from '.'

const role = 'presentation'

describe('Icon', () => {
  describe('Code', () => {
    it('displays Code Icon', () => {
      render(<Icon.Code color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Code Icon with no args', () => {
      render(<Icon.Code />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Dial', () => {
    it('displays Dial Icon', () => {
      render(<Icon.Dial color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Dial Icon with no args', () => {
      render(<Icon.Dial />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Exit', () => {
    it('displays Exit Icon', () => {
      render(<Icon.Exit color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Exit Icon with no args', () => {
      render(<Icon.Exit />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Github', () => {
    it('displays Github Icon', () => {
      render(<Icon.Github color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Github Icon with no args', () => {
      render(<Icon.Github />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Hamburger', () => {
    it('displays Hamburger Icon', () => {
      render(<Icon.Hamburger color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Hamburger Icon with no args', () => {
      render(<Icon.Hamburger />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Home', () => {
    it('displays Home Icon', () => {
      render(<Icon.Home color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Home Icon with no args', () => {
      render(<Icon.Home />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Location', () => {
    it('displays Location Icon', () => {
      render(<Icon.Location color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Location Icon with no args', () => {
      render(<Icon.Location />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Lock', () => {
    it('displays Lock Icon', () => {
      render(<Icon.Lock color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Lock Icon with no args', () => {
      render(<Icon.Lock />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Mail', () => {
    it('displays Mail Icon', () => {
      render(<Icon.Mail color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Mail Icon with no args', () => {
      render(<Icon.Mail />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Map', () => {
    it('displays Map Icon', () => {
      render(<Icon.Map color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Map Icon with no args', () => {
      render(<Icon.Map />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Settings', () => {
    it('displays Settings Icon', () => {
      render(<Icon.Settings color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Settings Icon with no args', () => {
      render(<Icon.Settings />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('Time', () => {
    it('displays Time Icon', () => {
      render(<Icon.Time color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays Time Icon with no args', () => {
      render(<Icon.Time />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })

  describe('User', () => {
    it('displays User Icon', () => {
      render(<Icon.User color="red" />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })

    it('displays User Icon with no args', () => {
      render(<Icon.User />)
      expect(screen.findAllByRole(role)).toBeInTheDocument()
    })
  })
})
