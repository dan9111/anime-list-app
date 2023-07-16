import { H1, H2, H4, P } from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";
import VoiceActors from "./(components)/VoiceActors";
import BackButton from "@/components/BackButton";
import type { Metadata } from "next";

type Repository = {
    data: {
        mal_id: number,
        url: string,
        images: {
            jpg: {
                image_url: string
            }
        },
        name: string,
        name_kanji: string,
        nicknames: string[],
        about: string,
        anime: [{
            role: string,
            
            anime: {
                mal_id: number,
                images: {
                    jpg: {
                        image_url: string
                    }
                },
                title: string,
            }
        }]
        voices: [{
            language: string,
            person: {
                mal_id: number,
                url: string,
                images: {
                    jpg: {
                        image_url: string
                    }
                },
                name: string
            }
        }]
    }
}

export async function generateMetadata({params }: any): Promise<Metadata> {
    const res = await fetch(`https://api.jikan.moe/v4/characters/${params.id}/full`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();

    return {
        title: data.data.name,
        description: data.data.name_kanji
    }
}

export default async function Page({params}:any) {
    const res = await fetch(`https://api.jikan.moe/v4/characters/${params.id}/full`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();

    return ( 
        <div className="text-white ml-5 flex flex-col h-full justify-center bg-gray-900/60 bg-gradient-to-b from-indigo-950/60 mx-4 mt-3 rounded-xl p-5">
            <div className="flex gap-5">
                <BackButton size={35} className="-mt-2 -mx-px hover:bg-transparent"/>
                <H2 className="border-b-0">{data.data.name}</H2>
            </div>
            <H4 className="text-md">{data.data.name_kanji}</H4>
            <div className="text-sm text-indigo-300 mb-4">
                {(data.data.nicknames[0] == null) ? '' : 
                <>
                    <span>Alias: </span>
                    {data.data.nicknames.map((nickname, index) => (
                    <span key={index}>{(index ? ', ' : '') + nickname}</span>
                ))}
                </>
                }
                
            </div>  
            <div className="md:flex">
                <div className="">
                    <Image 
                    src={data.data.images.jpg.image_url}
                    alt={data.data.name}
                    width={200}
                    height={300}
                    className="object-scale-down rounded-xl mt-2 aspect-auto flex-none bg-white"
                    /> 
                    <div className="flex flex-col my-2"> {/*Anime*/}
                    
                        <H4>Anime:</H4>
                        <div className="flex flex-col gap-2 overflow-y-auto h-[500px] md:h-[700px] scrollbar-thin scrollbar-thumb-purple-500">
                        {data.data.anime.map((dat) => (
                            <Link key={dat.anime.mal_id} href={`/anime/${dat.anime.mal_id}`} className="w-fit">
                            <div className="drop-shadow-lg flex bg-slate-600/40 gap-3 rounded-lg bg-gradient-to-b from-indigo-700/10 w-fit p-2">
                                <div className="w-[60px] h-[90px] relative">
                                    <Image src={dat.anime.images.jpg.image_url} alt={dat.anime.title} fill className="object-scale-down rounded-lg"/>
                                </div>
                                <div className=" w-[150px]">
                                    <p className="text-sm" >{dat.anime.title}</p>
                                    <p className="text-sm my-3 text-indigo-300" >{dat.role}</p>
                                </div>
                            </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 mx-4">
                    {(data.data.about == null) ? 
                    <>
                        <P>No biography written.</P>
                    </> : 
                    <>
                        {data.data.about.split('\n').map((dat,index) => (
                        <div key={index}>
                            <P>{dat}</P>
                        </div>
                        
                    ))}
                    </>}
                    
                    <H4 className="mt-3">Voice Actors:</H4>
                    <VoiceActors seiyuu={data.data.voices}/>
                </div>
            </div>
        </div>
     );
}
 