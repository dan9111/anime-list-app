import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {

    const listSkeleton = [0, 1, 2, 3, 4]

    return ( <>
        <div className='flex flex-col h-full justify-center bg-gray-700/40 bg-gradient-to-b from-indigo-950/40 mx-2 mb-2 rounded-xl'>
            <div className="mx-20 my-5 gap-4 flex flex-col">
                <Skeleton className="bg-gray-700/60 h-[20px] w-[300px] mb-8"/> {/*anime results */}
                {listSkeleton.map((index) => (
                    (index < listSkeleton.length) ? 
                <Skeleton className="bg-gray-700/60 h-[160px] w-full flex gap-4 p-3">
                    <Skeleton className="bg-gray-700/80 h-[140px] w-[200px] mb-8"/>
                    <div className="flex flex-col gap-2 w-[1000px] flex-auto">
                        <Skeleton className="bg-gray-700/80 h-[20px] w-[200px]"/>
                        <Skeleton className="bg-gray-700/80 h-[15px] w-[100px]"/>
                        <Skeleton className="bg-gray-700/80 h-[15px] w-[140px] mt-8"/>
                    </div>
                    <div className="flex flex-col w-full gap-2 overflow-auto rounded-md">
                        <Skeleton className="bg-gray-700/80 h-[15px] w-[100px]"/>
                        <Skeleton className="bg-gray-700/80 h-[10px] w-[160px]"/>
                        <Skeleton className="bg-gray-700/80 h-[30px] w-[60px]"/>
                        <Skeleton className="bg-gray-700/80 h-[15px] w-[100px]"/>
                    </div>
                </Skeleton> 
                : null
                ))}
            </div>
        </div>
    </> );
}
 
export default Loading;