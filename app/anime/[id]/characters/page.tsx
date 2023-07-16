import BackButton from "@/components/BackButton";
import { P, H3, H4} from "@/components/Typography"
import Image from "next/image"
import Link from "next/link";

type Repository = {
    data: [{
        character: {
            mal_id: number,
            url: string,
            images: {
                jpg: {
                    image_url: string,
                    small_image_url: string
                },
                webp: {
                    image_url: string,
                    small_image_url: string
                }
            },
            name: string
            },
        role: string,
        favorites: number,
        voice_actors: [
            {
            person: {
                mal_id: number,
                url: string,
                images: {
                    jpg: {
                        image_url: string
                    }
                },
                name: string
            },
            language: string
            }
            ]
    }]
}

export default async function Page({params}: any) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/characters`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();

    let favoritedData = data.data.slice().sort((a, b) => b.favorites - a.favorites)

    return (
    <div className="text-white">
        <div className='flex flex-col h-full justify-center bg-gray-700/40 bg-gradient-to-b from-indigo-950/40 mx-2 mb-2 rounded-xl'>
            <div className="flex gap-4 mx-20 ">
                <BackButton className="mt-5" size={35}/>
                <P className="text-white mt-5">All characters</P>
            </div>
            <div className="mx-20 my-5 gap-4 flex flex-col">
                {favoritedData.map((dat) => (
                    <div key={dat.character.mal_id} className=" text-white drop-shadow-lg flex bg-slate-600/40 rounded-lg p-3 bg-gradient-to-b from-indigo-700/10">
                        <Link  href={`/character/${dat.character.mal_id}`}>
                        <Image
                                src={dat.character.images.jpg.image_url}
                                alt={dat.character.name}
                                width={200}
                                height={300}
                                className="object-scale-down rounded-xl "
                        />
                        </Link>
                        <div className="flex flex-col mx-8 w-[1000px] flex-auto">
                        <H3>{dat.character.name}</H3>
                        <H4 className="text-sm text-purple-300">{dat.role}</H4>
                        <P className="text-sm text-purple-300">{dat.favorites + ((dat.favorites == 1) ? ' favorite' : ' favorites') }</P>
                        </div>
                        <div className="flex flex-wrap gap-4 w-full pl-4 overflow-auto justify-end rounded-md">
                        {dat.voice_actors.map(voice => (
                            (voice.language === 'Japanese') ? 
                            <div key={voice.person.mal_id} className="flex gap-6">
                                <div className='text-right'>
                                    <H4>{voice.person.name}</H4>
                                    <p className="text-purple-300">{voice.language}</p>
                                </div>
                                <Link href={`/people/${voice.person.mal_id}`}>
                                    <Image
                                    src={voice.person.images.jpg.image_url}
                                    alt={voice.person.name}
                                    width={100}
                                    height={200}
                                    className="object-scale-down rounded-xl "
                                    />
                                </Link>
                            </div>
                            
                            : <></>
                        ))}
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}