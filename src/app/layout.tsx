import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../app/component/Navbar'
import Footer from '../app/component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The car Jaipur ',
  description: 'this is a preowned luxury car company. we are  providing luxury and exotic cars at afforadable price. and we also provide consultancy service about cars. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <Navbar/>
  
        {children}
        <Footer/>
   
      </body>
    </html>
  )
}
