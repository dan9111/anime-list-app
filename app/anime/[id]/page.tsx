import { H1, H4, P } from "@/components/Typography";
import Image from "next/image";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import AnimeThemes from "./(components)/animeThemes";
import { Metadata, ResolvingMetadata } from 'next'
import AnimeMainCharacters from "./(components)/animeMainCharacters";
import { Button } from "@/components/ui/button";
import Link from "next/link";

 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://api.jikan.moe/v4/anime/${id}`).then((res) => res.json())
    
  if (!product.data.title_english) {
    return {
        title: product.data.title,
    }
  }
  return {
    title: product.data.title_english,
  }
}

type Repository = {  
    data: {
        title: string,
        title_japanese: string,
        title_english: string,
        mal_id: number,
        url: string,
        images: {
            jpg: {
                image_url: string,
                small_image_url: string,
                large_image_url: string
            }
        },
        trailer: {
            youtube_id: string,
            images: {
                maximum_image_url: string,
            }
        }
        synopsis: string,
        score: number,
        scored_by: number,
        rank: number,
        popularity: number,
        type: string,
        source: string,
        episodes: number,
        status: string,
        aired: {
            string: string
        },
        duration: string,
        rating: string
    }
}

export default async function Page({ params }: any) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();
    const noSynopsis = "No synopsis written";
    return (
        <div>
            <section className="absolute w-full left-0 top-0 p-0 h-screen -z-50 opacity-40" id="hero-background">
                {data.data.trailer.images.maximum_image_url && (
                    <Image
                    src={data.data.trailer.images.maximum_image_url ?? data.data.trailer.images.maximum_image_url}
                    alt={data.data.title}
                    fill
                    style={{objectFit: "cover"}}
                    className="rounded-xl aspect-auto relative"
                    />
                )}
                {!data.data.trailer.images.maximum_image_url && (
                    <p>No Image</p>
                )}
                 
                <div className="absolute dark w-full h-full bg-gradient-to-t from-background to-transparent" />
                <div className="absolute w-full h-full bg-gradient-to-b from-background/30 to-transparent" />
                <div className="absolute dark w-full h-full bg-background/5" />
            </section>

            <div className="text-white ml-5 flex flex-col h-full justify-center bg-gray-900/60 bg-gradient-to-b from-indigo-950/60 mx-4 mt-3 rounded-xl p-5">
            <H1>{data.data.title_english ? data.data.title_english : data.data.title}</H1>
            <p className="my-2 w-100">JP: {data.data.title_japanese}</p>
            <div className="flex">
                <Image
                src={data.data.images.jpg.large_image_url}
                alt={data.data.title}
                width={200}
                height={300}
                className="object-scale-down rounded-xl mt-2 aspect-auto"
                />
                <div className="ml-4 mt-2">
                    <div className="flex gap-5">
                    <div className=" flex flex-col justify-items-center items-center w-30 flex-grow">
                        <P className="font-bold bg-purple-400 text-black rounded-md px-3">Score</P>
                        <h2 className="scroll-m-20 text-3xl font-bold">{data.data.score ? data.data.score.toFixed(2) : 'N/A'}</h2>
                        <p className=" text-xs">{data.data.scored_by ? data.data.scored_by + ' users' : 'no user'}</p>
                    </div>
                    <div className="flex flex-col ml-4 flex-grow text-purple-300">
                        <div>
                            <P className="text-xs mt-3">Ranked: </P>
                            <h2 className="scroll-m-20 text-3xl font-semibold text-white">{data.data.rank ? '#' + data.data.rank : 'N/A'}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow text-purple-300">
                        <div>
                            <P className="text-xs mt-3">Popularity: </P>
                            <h2 className="scroll-m-20 text-3xl font-semibold text-white">{data.data.popularity ? '#' + data.data.popularity : 'N/A'}</h2>
                        </div>
                    </div>
                    </div>
                    <div className="my-5 text-sm">
                        <ul>
                            <li>
                                <span className="text-purple-300">Type: </span>
                                <span>{data.data.type}</span>
                            </li>
                            <li>
                                <span className="text-purple-300">Source: </span>
                                <span>{data.data.source}</span>
                            </li>
                            <li>
                                <span className="text-purple-300">Episodes: </span>
                                <span>{data.data.episodes}</span>
                            </li>
                            <li>
                                <span className="text-purple-300">Aired: </span>
                                <span>{data.data.aired.string}</span>
                            </li>
                            <li>
                                <span className="text-purple-300">Duration: </span>
                                <span>{data.data.duration}</span>
                            </li>
                            <li>
                                <span className="text-purple-300">Rating: </span>
                                <span>{data.data.rating}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-2 mx-auto">
                    <AnimeThemes animeId={params.id} animeName={data.data.title_english ? data.data.title_english : data.data.title}/>
                </div>
                <div className="mt-2 ml-4">
                </div>
            </div>
            <div className="text-white flex-shrink my-2 w-50">
                <P>{data.data.synopsis ?? noSynopsis}</P>
            </div>
            <AnimeMainCharacters animeMCId={params.id}/>
            <Button asChild><Link href={`${params.id}/characters`}>View more characters</Link></Button>
        </div>
        </div>
    )
}