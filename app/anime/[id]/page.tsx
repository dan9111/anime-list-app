import { H1, P } from "@/components/Typography";
import Link from "next/link";
import Image from "next/image";

type Repository = {  
    data: {
        title: string,
        mal_id: number,
        url: string,
        images: {
            jpg: {
                image_url: string,
                small_image_url: string,
                large_image_url: string
            }
        },
        synopsis: string
    }
}

export default async function AnimeWithId({ params }: any) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();
    const noSynopsis = "No synopsis written"
    return (
        <div className="flex">
        <div className="text-white ml-5">
            <H1>{data.data.title}</H1>
            <Link href={data.data.url}>Open in MyAnimeList</Link>
            <Image
            src={data.data.images.jpg.large_image_url}
            alt={data.data.title}
            width={200}
            height={300}
            className="rounded-xl mt-2"
            />
            <div className="text-white flex-shrink my-2 w-50">
            <P>{data.data.synopsis ?? noSynopsis}</P>
        </div>
        </div>
        
        </div>
    )
}