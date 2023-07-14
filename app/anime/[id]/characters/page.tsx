const Page = ({params}: any) => {
    return ( <div>
        <div className="text-white ml-5 flex flex-col h-full justify-center bg-gray-900/60 bg-gradient-to-b from-purple-950/60 mx-4 mt-3 rounded-xl p-5">
            <p>{params.id}</p>
        </div>
    </div> );
}
 
export default Page;