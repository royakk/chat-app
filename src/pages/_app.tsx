
import '../styles/globals.css'

import { useEffect, useState } from 'react'
import {Auth} from './Auth'
// import Chat from './Chat'
export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    setIsLoading(false)
  }, [])
  return isLoading ? (
    <div
      className="d-flex text-white vh-100 vw-100 
    justify-content-center align-items-center"
    >
      Loading...
    </div>
  ) : (
    <div>{isAuthenticated ? <Chat /> : <Auth />}</div>
  )
}
