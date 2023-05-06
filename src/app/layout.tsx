'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    initFlowbite()
  })

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Script src='../../node_modules/flowbite/dist/flowbite.min.js'></Script>
      </body>
    </html>
  )
}
