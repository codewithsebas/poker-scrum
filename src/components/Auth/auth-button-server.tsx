import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { AuthButtonClient } from './auth-button-client';

export async function AuthButtonServer() {
    const supase = createServerComponentClient({ cookies })
    const { data: { session } } = await supase.auth.getSession()

    return <AuthButtonClient session={session} />
}