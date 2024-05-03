import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthButtonServer } from "app/components/Auth/auth-button-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RoomPage() {

    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    if(session === null) {
        redirect('/')
    } 

    return (
        <main className="w-full h-screen">
            Hola mundo
            <AuthButtonServer />
        </main>
    )
}