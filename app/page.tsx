import { P, H1 } from '@/components/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-screen text-slate-200 '>
      <div className='flex flex-col h-screen justify-center bg-gray-700/40 bg-gradient-to-b from-purple-950/40 bg-contain mx-2 mb-2 rounded-xl'>
        <H1 className='ml-5'>What is The Anime Database</H1>
        <P className='ml-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
        <Button asChild className='w-[200px] justify-center ml-5 my-2 items-center'>
          <Link href="/animelist">Lists of Anime</Link>
        </Button>
      </div>
    </main>
  )
}
