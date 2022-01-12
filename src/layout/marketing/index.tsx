import React from 'react'

import Footer from './Footer'
import Header from './Header'

const MarketingLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  )
}

export default MarketingLayout
