import Image from 'next/image'
import NavBar from '@/components/header/NavBar'
import Main from '@/components/main/Main'
import Infos from '@/components/infos/infos'
import ComputerCanvas from '@/components/canvas/Computers'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-black overflow-hidden">
      <NavBar/>
      <Main/>
    </main>
  )
}
