import React from 'react'

import SiteTitle from './SiteTitle'

const LandingLayout: React.FC = ({ children }) => {
  return (
    <div>
      <div className="text-center mx-4 my-6">
        <SiteTitle />
      </div>
      {children}
    </div>
  )
}

export default LandingLayout
