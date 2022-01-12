import { Session } from 'next-auth'
import { useQuery } from 'react-query'

async function fetchSession(): Promise<Session | null> {
  const res = await fetch('/api/auth/session')
  const session = await res.json()
  if (Object.keys(session).length) {
    return session
  }
  return null
}

const useSession = () => useQuery('session', () => fetchSession())

export default useSession
