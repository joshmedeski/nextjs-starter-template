import DefaultLayout, { CenteredLayout } from './DefaultLayout'
import LandingLayout from './LandingLayout'

export type LayoutType = 'landing' | 'centered'

export const getLayout = (type: LayoutType | undefined): React.FC => {
  console.log('type: ', type)
  switch (type) {
    case 'landing':
      return LandingLayout
    case 'centered':
      return CenteredLayout
    default:
      return DefaultLayout
  }
}
