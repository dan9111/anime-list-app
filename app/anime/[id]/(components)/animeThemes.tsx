import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type Repository = {
    data: {
        openings: [
            string,
        ],
        endings: [
            string,
        ]
    }
}

export default async function animeThemes({animeId, animeName}: any) {

    const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/themes`);
    if (!res.ok) {
        return (
            <p>Fail to fetch themes, please refresh the page</p>
        )
    }

    const data: Repository = await res.json();

    return (
        <div className="flex gap-4">
        <Sheet>
            <SheetTrigger asChild>
                <Button>Show opening theme</Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 bg-gradient-to-b from-indigo-950 border-indigo-900" side="left">
                <SheetHeader>
                    <SheetTitle className="text-white">Opening Theme</SheetTitle>
                    <SheetDescription className="text-indigo-400">{data.data.openings[0] ? 'List of '+ animeName+ ' opening theme' : animeName + ` doesn't have any openings`}</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 ">
                    <ul className="h-[600px] overflow-auto">
                        {data.data.openings.map((opening, index) => (
                            <li key={index} className="text-indigo-300">{opening}</li>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
        <Sheet>
            <SheetTrigger asChild>
                <Button>Show ending theme</Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 bg-gradient-to-b from-indigo-950 border-indigo-900">
                <SheetHeader>
                    <SheetTitle className="text-white">Ending Theme</SheetTitle>
                    <SheetDescription className="text-indigo-400">{data.data.endings[0] ? 'List of '+ animeName+ ' ending theme' : animeName + ` doesn't have any endings`}</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4 ">
                    <ul className="h-[600px] overflow-auto">
                        {data.data.endings.map((ending, index) => (
                            <li key={index} className="text-indigo-300">{ending}</li>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
        </div>
    )
}