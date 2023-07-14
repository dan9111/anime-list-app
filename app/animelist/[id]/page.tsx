import Link from "next/link";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import Image from "next/image";


type Repository = {
    
    data: [{
        title: string,
        mal_id: number,
        images: {
            jpg: {
                large_image_url: string
            }
        }
    }]
}

export default async function Page({ params }: any) {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${params.id}&limit=20`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();

    return (
        <>
            <div className="mx-20 my-5 gap-4 grid grid-cols-4">
                {data.data.map((dat) => (
                        <HoverCard key={dat.mal_id}>
                            <HoverCardTrigger>
                                <Link href={`/anime/${dat.mal_id}`}>
                                <Image
                                src={dat.images.jpg.large_image_url}
                                alt={dat.title}
                                width={400}
                                height={200}
                                className="rounded-md"
                                />
                                </Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="bg-black text-white">{dat.title}</HoverCardContent>
                        </HoverCard>
                ))}
            </div>
        </>
    );
}