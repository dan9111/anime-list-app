import { P, H1, H3 } from '@/components/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from './animelist/(components)/SearchList'

export default function Home() {
  const wallpapers = ['https://cdn.myanimelist.net/images/anime/1168/128144l.jpg', 'https://cdn.myanimelist.net/images/anime/1460/119974l.jpg', 'https://cdn.myanimelist.net/images/anime/5/79183l.jpg']

  return (
    <main className='h-screen text-slate-200 '>
            <section className="absolute w-full left-0 top-0 bottom-0 p-0 h-screen -z-50 opacity-40" id="hero-background">
                <div className='flex h-screen'>
                  {wallpapers.map((wallpaper) => (
                    <Image
                    src={wallpaper}
                    alt={'Home wallpaper'}
                    width={1000}
                    height={50}
                    style={{objectFit: "cover"}}
                    className="rounded-xl aspect-auto relative"
                    />   
                  ))}
                </div> 
            </section>
                <div className="absolute left-0 top-0 dark w-full h-full bg-gradient-to-t -z-50 from-black to-transparent" />
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b -z-50 from-black/30 to-transparent" />
                <div className="absolute left-0 top-0 dark w-full h-full -z-50 bg-black/5" />
      <div className='flex flex-col h-full justify-center bg-gray-700/40 bg-gradient-to-b from-indigo-950/40 bg-contain'>
        <H1 className='mx-7 text-purple-500'>Welcome to</H1>
        <H1 className='mx-7'>The Anime Database</H1>
        <H3 className='mx-7 my-3'>Discover thousands of Anime throughout the era. Ready to be explored</H3>
        <div className='w-full justify-center mx-7 items-center'>
          <P>Start searching now</P>
          <SearchInput className='bg-slate-200 text-black' buttonClassName='bg-purple-800' placeholder={`Search an Anime and hit 'Enter'`}/>
        </div>
      </div>
    </main>
  )
}
