import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return ( <>
        <div className='flex flex-col h-full justify-center bg-gray-700/40 bg-gradient-to-b from-purple-950/40 mx-2 mb-2 rounded-xl'>
            <div className="mx-20 my-5 gap-4 flex flex-col">
                <Skeleton className="bg-gray-700/60 h-[20px] w-[300px] mb-8"/>

                <Skeleton className="bg-gray-700/60 h-[160px] w-full flex p-3">
                    <Skeleton className="bg-gray-700/60 h-[140px] w-[100px] mb-8"/>
                </Skeleton>
                <Skeleton className="bg-gray-700/60 h-[160px] w-full flex p-3">
                    <Skeleton className="bg-gray-700/60 h-[140px] w-[100px] mb-8"/>
                </Skeleton>
                <Skeleton className="bg-gray-700/60 h-[160px] w-full flex p-3">
                    <Skeleton className="bg-gray-700/60 h-[140px] w-[100px] mb-8"/>
                </Skeleton>
                <Skeleton className="bg-gray-700/60 h-[160px] w-full flex p-3">
                    <Skeleton className="bg-gray-700/60 h-[140px] w-[100px] mb-8"/>
                </Skeleton>
            </div>
        </div>
    </> );
}
 
export default Loading;