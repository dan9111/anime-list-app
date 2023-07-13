import { H1, H2, P } from "@/components/Typography";
import Link from "next/link";
import { Suspense } from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

type Repository = {
    
    data: [{
        title: string
        mal_id: number,
    }]
}

export default async function Page() {
    const search = "world trigger"
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
    if (!res.ok) throw new Error('failed to fetch data')

    const data: Repository = await res.json();

    return (
        <div>
            <H1 className="text-white ml-2">Anime Lists</H1>
            <div className="ml-2 my-5">
                {data.data.map((dat) => (
                    <Link key={dat.mal_id} href={`/anime/${dat.mal_id}`}><p className="text-white">{dat.title}</p></Link>
                ))}
            </div>
                
        </div>
    );
}