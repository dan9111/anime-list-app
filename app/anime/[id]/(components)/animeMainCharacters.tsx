import { H3 } from "@/components/Typography"
import Image from "next/image"

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
    }]
}


export default async function AnimeMainCharacters({animeMCId}: any) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${animeMCId}/characters`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();
    const mainCharacter = 'Main'
    return (
        <div>
            <H3>Main Cast:</H3>
            <div className="flex flex-wrap gap-3 container justify-start justify-items-center items-center my-3">
                {data.data.map((dat) => (
                    <div key={dat.character.mal_id}>
                        {(dat.role === mainCharacter) && (
                            <>
                            <div className="w-[100px] h-[150px] relative">
                                <Image
                                src={dat.character.images.jpg.image_url}
                                alt={dat.character.name}
                                fill
                                className="rounded-lg"
                                />
                            </div>
                            <div className=""><p className="text-xs text-indigo-300">{dat.character.name}</p></div>
                            </>
                        )}
                        {!(dat.role === mainCharacter) && (
                            <>
                            </>
                        )}  
                    </div>
                ))}
            </div>
        </div>
    )
};