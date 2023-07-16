import Image from "next/image";
import { H4 } from "./Typography";
import Link from "next/link";
import { Suspense } from "react";


type Repository = {
    data: [{
        mal_id: number,
        title: string,
        title_english: string,
        title_japanese: string
        images: {
            jpg: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
            },
            webp: {
            image_url: string,
            small_image_url: string,
            large_image_url: string
            }
            },
    }],
    pagination: {

    }
}

export default async function AiringNow() {
    const res = await fetch(`https://api.jikan.moe/v4/seasons/now`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();

    return (
        <div>
            <H4>Current Season:</H4>
            <div className="flex gap-4 overflow-x-auto md:w-[1200px] flex-shrink h-fit scrollbar-thin mt-2">
                {data.data.map((dat) => (
                    <div key={dat.mal_id} className="drop-shadow-lg bg-slate-600/40 gap-3 rounded-lg bg-gradient-to-b from-indigo-700/10 w-fit p-2">
                        <Suspense fallback='Loading'>
                        <div className="w-[120px] h-[160px] relative rounded-lg bg-black bg-gradient-to-b from-indigo-950/60">
                        <Link href={`/anime/${dat.mal_id}`}>
                        <Image
                        src={dat.images.jpg.image_url}
                        alt={dat.title}
                        fill
                        className="rounded-lg object-scale-down"
                        />
                        </Link>
                        </div>
                        <div className="text-xs mt-2 text-indigo-300">
                        <p>{dat.title}</p>
                        </div>
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    )
}