import Link from "next/link"
import { AuthButtonServer } from "../Auth/auth-button-server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import Image from "next/image";

export default async function FormSignUp() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const avatar_url = session?.user.user_metadata.avatar_url
  const full_name = session?.user.user_metadata.full_name

  return (
    <div className="flex w-full max-w-xs flex-col gap-5 sm:max-w-sm md:px-0 md:pb-4 2xl:max-w-md">
      <div className="flex flex-col gap-1 text-dark">
        {session &&
          <Image src={avatar_url} alt="Profile" className="rounded-lg mb-2" width={70} height={70} />
        }
        <h2 className="text-2xl font-semibold">{full_name ? full_name : 'Simplificando Historias de Usuario'}</h2>
        <p className="text-sm font-normal">
          {session ? 'Ahora puedes invitar a tu equipo de trabajo. ' : 'Facilita las tareas para historias de usuario.'}  {" "}
          <Link href="/" className="font-semibold text-purple hover:underline">
            Poker Scrum
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <AuthButtonServer />
      </div>
    </div>
  )
}
