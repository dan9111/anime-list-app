import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return ( 
    <div>
        <div className="gap-2 text-white ml-5 flex flex-col h-full justify-center bg-gray-900/60 bg-gradient-to-b from-purple-950/60 mx-4 mb-2 rounded-xl p-5">
            <Skeleton className="bg-gray-700/60 h-[50px] w-[400px]"/>
            <Skeleton className="bg-gray-700/60 h-[20px] w-[200px]"/>
            <div className="flex gap-4 mt-2">
                <Skeleton className="bg-gray-700/60 h-[200px] w-[150px]"/>
                <div className="ml-4 mt-2">
                    <div className="flex flex-col justify-items-center items-center w-30 flex-grow gap-2">
                        <Skeleton className="bg-gray-700/60 h-[20px] w-[70px]"/>
                        <Skeleton className="bg-gray-700/60 h-[30px] w-[70px]"/>
                        <Skeleton className="bg-gray-700/60 h-[10px] w-[50px]"/>
                    </div>
                <Skeleton className="bg-gray-700/60 h-[20px] w-[100px] my-2"/>
                <Skeleton className="bg-gray-700/60 h-[20px] w-[100px] my-2"/>
                </div>
            </div>
            <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
            <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
            <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
            <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
            <Skeleton className="bg-gray-700/60 h-[20px] w-full"/>
            <Skeleton className="bg-gray-700/60 h-[20px] w-[300px]"/>
        </div>
    </div> );
}
 
export default Loading;