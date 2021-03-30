import React from 'react'
import { render, screen } from '~/test/utils'
import { Icon } from '~/components/Icon'

describe('<Icon />', () => {
  const role = 'presentation'

  describe('<Icon.Code />', () => {
    it('displays Code Icon', () => {
      render(<Icon.Code color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Code Icon with no args', () => {
      render(<Icon.Code />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Dial />', () => {
    it('displays Dial Icon', () => {
      render(<Icon.Dial color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Dial Icon with no args', () => {
      render(<Icon.Dial />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Exit />', () => {
    it('displays Exit Icon', () => {
      render(<Icon.Exit color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Exit Icon with no args', () => {
      render(<Icon.Exit />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Github />', () => {
    it('displays Github Icon', () => {
      render(<Icon.Github color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Github Icon with no args', () => {
      render(<Icon.Github />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Hamburger />', () => {
    it('displays Hamburger Icon', () => {
      render(<Icon.Hamburger color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Hamburger Icon with no args', () => {
      render(<Icon.Hamburger />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Home />', () => {
    it('displays Home Icon', () => {
      render(<Icon.Home color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Home Icon with no args', () => {
      render(<Icon.Home />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.LoadingIndicator />', () => {
    it('displays icon with no args', () => {
      render(<Icon.LoadingIndicator />)
      expect(screen.getByRole('status')).toMatchSnapshot()
    })
  })

  describe('<Icon.Location />', () => {
    it('displays Location Icon', () => {
      render(<Icon.Location color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Location Icon with no args', () => {
      render(<Icon.Location />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Lock />', () => {
    it('displays Lock Icon', () => {
      render(<Icon.Lock color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Lock Icon with no args', () => {
      render(<Icon.Lock />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Mail />', () => {
    it('displays Mail Icon', () => {
      render(<Icon.Mail color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Mail Icon with no args', () => {
      render(<Icon.Mail />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Map />', () => {
    it('displays Map Icon', () => {
      render(<Icon.Map color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Map Icon with no args', () => {
      render(<Icon.Map />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Settings />', () => {
    it('displays Settings Icon', () => {
      render(<Icon.Settings color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Settings Icon with no args', () => {
      render(<Icon.Settings />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Time />', () => {
    it('displays Time Icon', () => {
      render(<Icon.Time color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Time Icon with no args', () => {
      render(<Icon.Time />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.User />', () => {
    it('displays User Icon', () => {
      render(<Icon.User color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays User Icon with no args', () => {
      render(<Icon.User />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Twit />ter', () => {
    it('displays User Icon', () => {
      render(<Icon.Twitter color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays User Icon with no args', () => {
      render(<Icon.Twitter />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Face />book', () => {
    it('displays User Icon', () => {
      render(<Icon.Facebook color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays User Icon with no args', () => {
      render(<Icon.Facebook />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Youtube />', () => {
    it('displays User Icon', () => {
      render(<Icon.Youtube color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays User Icon with no args', () => {
      render(<Icon.Youtube />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Instagram />', () => {
    it('displays User Icon', () => {
      render(<Icon.Instagram color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays User Icon with no args', () => {
      render(<Icon.Instagram />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })

  describe('<Icon.Close />', () => {
    it('displays Close Icon', () => {
      render(<Icon.Close color="red" />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })

    it('displays Close Icon with no args', () => {
      render(<Icon.Close />)
      expect(screen.getByRole(role)).toMatchSnapshot()
    })
  })
})
