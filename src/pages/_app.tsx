
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
     
    >
      Loading...
    </div>
  ) : (
    <div>{isAuthenticated ? "jhgg" : <Auth />}</div>
  )
}
