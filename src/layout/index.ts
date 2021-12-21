import AppLayout from './AppLayout'
import LandingLayout from './LandingLayout'
import MarketingLayout from './MarketingLayout'

export type LayoutType = 'app' | 'landing' | 'marketing'

export const getLayout = (type: LayoutType | undefined): React.FC => {
    switch (type) {
        case 'app':
            return AppLayout
        case 'landing':
            return LandingLayout
        case 'marketing':
        default:
            return MarketingLayout
    }
}
