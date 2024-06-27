import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/baseComponents/button'
import Header from '@/components/header'
import App from './_app'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    >
      <App/>
    </main>
  )
}
