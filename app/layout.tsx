import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Anime Database',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('bg-black w-full overflow-x-hidden overflow-y-auto scrollbar-thumb-purple-500 scrollbar-track-slate-900 scrollbar-thin scrollbar-thumb-rounded-sm', inter.className)}>
        <Navbar/>
        {children}
        <div className='h-full'></div>
      </body>
    </html>
  )
}
