import Link from "next/link";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import Image from "next/image";
import { H3, H4, P } from "@/components/Typography";


type Repository = {
    pagination:{
        items: {
            count: number
        }
    },
    data: [{
        title: string,
        title_japanese: string,
        title_english: string,
        mal_id: number,
        images: {
            jpg: {
                image_url: string
            }
        },
        status: string,
        genres: [{
            name: string
        }],
        studios: [{
            name: string
        }],
        favorites: number,
        score: number,
    }]
}

export default async function Page({ params }: any) {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${params.id}&sfw`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();

    const searchQuery = params.id;
    const searchQueryString = searchQuery.replace(/%20/g, " ")
    const searchTotal = data.pagination.items.count;

    return (
        <>
            <div className='flex flex-col h-full justify-center bg-gray-700/40 bg-gradient-to-b from-purple-950/40 mx-2 mb-2 rounded-xl'>
                <P className="text-white mx-20 my-5">Showing {searchTotal} anime results from: {searchQueryString}</P>
                <div className="mx-20 my-5 gap-4 flex flex-col">
                    {data.data.map((dat) => (
                    <Link className="text-white" key={dat.mal_id} href={`/anime/${dat.mal_id}`}>
                        <div className="drop-shadow-lg flex bg-slate-600/40 rounded-lg p-3 overflow-hidden bg-gradient-to-b from-indigo-700/10">
                            <Image
                                src={dat.images.jpg.image_url}
                                alt={dat.title}
                                width={100}
                                height={200}
                                className="object-scale-down rounded-xl "
                            />
                            <div className="flex flex-col mx-8 w-[1000px] flex-auto">
                                <H3>{dat.title_english ? dat.title_english : dat.title}</H3>
                                <H4 className="text-sm">JP: {dat.title_japanese}</H4>
                                <P className="text-sm">Status: {dat.status}</P>
                            </div>
                            <div/>
                            <div className="flex flex-col w-full pl-4 overflow-auto bg-indigo-600/10 p-2 rounded-md">
                                <H4 className="text-md">Details</H4>
                                <div className="flex text-xs">
                                    <p className="mr-2">Genre:</p>
                                    {dat.genres.map((genre, index) => (
                                        <span key={index}>
                                        <p>{(index ? ', ' : '') + genre.name}</p>                                  
                                        </span>
                                    ))}
                                </div>
                                <div className="grid grid-cols-4">
                                {dat.studios.map((studio, index) => (
                                    <span key={index}>
                                    <p>{(index ? ' ' : '') + studio.name}</p>                                  
                                    </span>
                                )) }
                                </div>
                                <div className="bg-zinc-900/60 w-16 p-1 flex-l h-8 my-0.5 rounded-md flex justify-center items-center">
                                    <H3>{dat.score ? dat.score : 'N/A'}</H3>
                                </div>
                                <p className="text-sm">{dat.favorites ? dat.favorites + ' favorites' : ''}</p>
                            </div>    
                        </div>                       
                    </Link>
                    ))}
            </div>
            </div>
        </>
    );
}