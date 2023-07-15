'use client';

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im"

interface SearchInputProps {
    className?: string;
    placeholder?: string;
    buttonClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className, placeholder, buttonClassName }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);

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
        placeholder={placeholder} 
        className={cn("bg-gray-800 border-slate-500 focus-visible:ring-slate-500 text-white rounded-none rounded-l-xl", className)}>
        </Input>
        <Button onClick={onSearch} className={cn("bg-slate-500 hover:bg-slate-700 rounded-none rounded-r-xl", buttonClassName)}>
            {<BiSearch size={25}/>} 
        </Button>
        </form>
     );
}

export default SearchInput;