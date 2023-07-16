import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return ( 
    <div>
        <div className="gap-2 text-white ml-5 flex flex-col h-full justify-center bg-gray-900/60 bg-gradient-to-b from-indigo-950/60 mx-4 mb-2 rounded-xl p-5">
            <Skeleton className="bg-gray-700/60 h-[50px] w-[400px]"/>
            <Skeleton className="bg-gray-700/60 h-[20px] w-[200px]"/>
            <Skeleton className="bg-gray-700/60 h-[10px] w-[200px]"/>
            <div className="flex gap-4 mt-2">
                <div className="flex flex-col gap-2">
                    <Skeleton className="bg-gray-700/60 h-[200px] w-[150px]"/>
                    <Skeleton className="bg-gray-700/60 h-[20px] w-[80px]"/>
                    <Skeleton className="bg-gray-700/60 h-[100px] w-[170px]"/> {/*image */}
                    <Skeleton className="bg-gray-700/60 h-[100px] w-[170px]"/>
                    <Skeleton className="bg-gray-700/60 h-[100px] w-[170px]"/>
                </div>
                <div className="flex flex-col">
                <div className="flex ml-4 mt-2">
                    <div className="flex flex-col flex-grow gap-2">{/*score */}
                    <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
                    <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
                    <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
                    <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
                    <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
                    <Skeleton className="bg-gray-700/60 h-[20px] w-[300px]"/>
                    </div>
                </div>
                </div>
            </div>
   
        </div>
    </div> );
}
 
export default Loading;