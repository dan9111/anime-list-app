import { H1, P } from "@/components/Typography";
import Image from "next/image";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import AnimePictures from "./(components)/animePictures";

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
        popularity: number
    }
}

export default async function AnimeWithId({ params }: any) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`);
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

            <div className="text-white ml-5 flex flex-col h-full justify-center bg-gray-900/60 bg-gradient-to-b from-purple-950/60 mx-4 mb-2 rounded-xl p-5">
            <H1>{data.data.title_english ? data.data.title_english : data.data.title}</H1>
            <p className="my-2 w-100">JP: {data.data.title_japanese}</p>
            <div className="flex">
                <Image
                src={data.data.images.jpg.large_image_url}
                alt={data.data.title}
                width={200}
                height={300}
                className="rounded-xl mt-2 aspect-auto"
                />
                <div className="ml-4 mt-2">
                    <div className=" flex flex-col justify-items-center items-center w-30 flex-grow">
                        <P className="font-bold bg-indigo-400 text-black rounded-md px-3">Score</P>
                        <h2 className="scroll-m-20 text-3xl font-semibold">{data.data.score ? data.data.score : 'N/A'}</h2>
                        <p className=" text-xs">{data.data.scored_by ? data.data.scored_by + ' users' : 'no user'}</p>
                    </div>
                    <div className="my-2 text-indigo-300">
                        <p>
                            <span>Ranked: </span>
                            <span className="font-semibold text-white">{data.data.rank ? '#' + data.data.rank : 'N/A'}</span>
                        </p>
                        <p>
                            <span>Popularity: </span>
                            <span className="font-semibold text-white">{data.data.popularity ? '#' + data.data.popularity : 'N/A'}</span>
                        </p>
                    </div>
                </div>
                <div className="mt-2 mx-auto">
                    <AnimePictures animeId={params.id}/>
                </div>
                <div className="mt-2 ml-4">
                </div>
            </div>
            <div className="text-white flex-shrink my-2 w-50">
            <P>{data.data.synopsis ?? noSynopsis}</P>
        </div>
        </div>
        
        </div>
    )
}