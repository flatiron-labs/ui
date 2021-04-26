import * as RadixAvatar from '@radix-ui/react-avatar'
import { styled } from '~/styles'

export const Avatar = styled(RadixAvatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '62px',
  height: '62px',
  borderRadius: '$round'
})

Avatar.displayName = 'Avatar'

export const AvatarImage = styled(RadixAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontFamily: '$firaCode',
  backgroundColor: '$blue500',
  color: '$black500'
})

AvatarFallback.displayName = 'AvatarFallback'
