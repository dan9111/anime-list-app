import Link from "next/link";
import Image from "next/image";

interface VoiceActorsProps {
    seiyuu? : [{
        language: string,
        person: {
            mal_id: number,
            url: string,
            images: {
                jpg: {
                    image_url: string
                }
            },
            name: string
        }
    }]
}

const VoiceActors: React.FC<VoiceActorsProps> = ({seiyuu}) => {
    return (
    <div className="flex gap-4 overflow-x-auto md:w-[1100px] h-fit scrollbar-thin">
        {seiyuu?.map((voice) => (
            <div key={voice.person.mal_id} className="drop-shadow-lg bg-slate-600/40 gap-3 rounded-lg bg-gradient-to-b from-indigo-700/10 w-fit p-2">
                <div className="w-[100px] h-[150px] relative rounded-lg bg-black bg-gradient-to-b from-indigo-950/60">
                <Link href={`/people/${voice.person.mal_id}`}>
                    <Image
                    src={voice.person.images.jpg.image_url}
                    alt={voice.person.name}
                    fill
                    className="md:object-scale-down rounded-lg"
                    />
                </Link>
                </div>
                <p className="text-sm">{voice.person.name}</p>
                <p className="text-xs text-indigo-300">{voice.language}</p>
            </div>  
        ))}
    </div> );
}
 
export default VoiceActors;