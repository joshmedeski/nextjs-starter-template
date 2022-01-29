import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { NextPage } from '~/page'

const NotFoundPage: NextPage<void> = () => {
  const router = useRouter()
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-4">
        Page Not Found (404)
      </h1>

      <p className="mb-4 text-center text-gray-400">
        The page you tried to visit isn't in our system.
      </p>

      <div className="flex items-center justify-center space-x-4">
        <button className={''} onClick={() => router.back()}>
          Back
        </button>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </div>
    </div>
  )
}

NotFoundPage.layout = 'centered'

export default NotFoundPage
