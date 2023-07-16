

import Link from "next/link";
import { H3 } from "./Typography";
import SearchNav from "./SearchNav";
import SearchInput from "./LiveSearch";

export default async function Navbar() {
  return (
    <div className="flex w-full h-[50px] flex-grow bg-gray-900">
      <div className="ml-3 my-auto flex-none">
        <Link href={'/'}><H3 className="text-white">The Anime Database</H3></Link>
      </div>
      <div className="flex-auto w-[500px] justify-end gap-4 items-center">
      </div>
      <div className="flex w-[500px] gap-1 items-center mr-2">
        <SearchInput placeholder="Search">
          <SearchNav/>
        </SearchInput>
          
      </div>
    </div>
  );
}

