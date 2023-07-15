'use client';

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState, } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im"

interface SearchInputProps {
    className?: string;
    placeholder?: string;
    buttonClassName?: string;
    children?: React.ReactNode
}

const SearchInput: React.FC<SearchInputProps> = ({ className, placeholder, buttonClassName, children}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [animeData, setAnimeData] = useState(null);

    useEffect(() => {
        async function fetchAnimeData() {
            const response = await fetch('/api/anime/21')
            const animes = await response.json()
            setAnimeData(animes)
            setLoading(false)
        }
    }, [])

    

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/animelist/${encodedSearchQuery}`)

        console.log('query: ', encodedSearchQuery)
    };
    

    return ( 
        <div className="justify-center relative w-2/3 text-white ">
            <form className="flex " onSubmit={onSearch}>
                <Input
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                type="search" 
                placeholder={placeholder} 
                className={cn("bg-gray-800 border-slate-500 focus-visible:ring-slate-500 rounded-none rounded-l-xl", className)}>
                </Input>
                <Button onClick={onSearch} className={cn("bg-slate-500 hover:bg-slate-700 rounded-none rounded-r-xl", buttonClassName)}>
                    {<BiSearch size={25}/>} 
                </Button>
            </form>
            
        </div>

     );
}

export default SearchInput;
            