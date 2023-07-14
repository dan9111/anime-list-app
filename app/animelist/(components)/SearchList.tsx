'use client';

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/animelist/${encodedSearchQuery}`)

        console.log('query: ', encodedSearchQuery)
    };


    return ( 
        
        <form className="flex justify-center w-2/3" onSubmit={onSearch}>
        <Input
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        type="search" 
        placeholder="Search an Anime" 
        className="bg-gray-800 border-slate-500 focus-visible:ring-slate-500 text-white my-4">
        </Input>
        </form>
     );
}

export default SearchInput;