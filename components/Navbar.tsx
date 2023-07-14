import Link from "next/link";
import { H3 } from "./Typography";
import { Input } from "./ui/input";
import SearchInput from "@/app/animelist/(components)/SearchList";

const Navbar = () => {
  return (
    <div className="flex h-[50px] bg-gray-900 mb-2">
      <div className="ml-3 my-auto">
        <Link href={'/'}><H3 className="text-white">The Anime Database</H3></Link>
      </div>
      <div className="flex-auto w-64 justify-end gap-4 items-center">
      </div>
      <div className="flex-auto flex-row w-2 gap-4 items-center -mt-3 mr-2">
          <SearchInput/>
      </div>
    </div>
  );
};
export default Navbar;