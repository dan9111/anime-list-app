import { H2 } from "@/components/Typography";

const Page = ({params}:any) => {
    return ( 
        <div className="text-white">
            <H2>Feature coming soon</H2>
            <p>Character ID: {params.id}</p>
        </div>
     );
}
 
export default Page;