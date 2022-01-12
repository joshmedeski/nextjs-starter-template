import { signIn, signOut } from 'next-auth/react'
import React from 'react'

import useSession from '@/utils/useSession'

const HeaderAuth: React.FC = () => {
  const { data } = useSession()

  return (
    <div className="flex items-center gap-4">
      {!data?.user ? (
        <>
          <button onClick={() => signIn()}>Log In</button>
          <button
            className="px-3 py-2 bg-blue-500 text-white font-bold border-2 border-blue-600 shadow-md rounded-lg"
            onClick={() => signIn()}
          >
            Sign Up
          </button>
        </>
      ) : (
        <>
          <span className="italic text-neutral-500 text-sm">
            {data?.user?.email}
          </span>
          <button
            className="px-3 py-2 border-2 rounded-lg font-bold hover:text-blue-600"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  )
}

export default HeaderAuth
