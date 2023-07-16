import { H3 } from "@/components/Typography";

export default async function Page({params}: any) {
    return (
        <div className="text-white">
            <H3>Feature coming soon!</H3>
            <p>People ID: {params.id}</p>
        </div>
    )
}