import Copyright from "app/components/Copyright/Copyright";
import FormSignUp from "app/components/Forms/SignUp";
import Logo from "app/components/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import Welcome from "app/assets/svgs/welcome.svg"
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";


export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <main className="flex h-screen w-screen bg-slate-50">
      <div className="z-30 flex w-full flex-col items-center justify-between border-e bg-white py-5">
        <div className="flex h-full flex-col justify-center px-3 gap-5">
          <div className="block md:hidden">
            <Logo name="Chatizzí" />
          </div>
          <FormSignUp />
        </div>
        <Copyright />
      </div>
      <div className="relative hidden h-full w-full flex-col items-center justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple/20 via-slate-50 to-purple/20 bg-no-repeat px-5 md:flex">
        <div className="flex flex-col gap-3">
          {!session ? (
            <>
              <Logo />
              <div className="text-dark">
                <h2 className="text-xl font-medium">
                  Bienvenido a{" "}
                  <Link href="/" className="font-semibold text-purple">
                    Poker Scrum
                  </Link>
                </h2>
                <p className="">
                  Estás un paso más cerca de mejorar tu rendimiento.
                </p>
              </div>
              <Image
                src={Welcome}
                alt="Dashboard"
                width={350}
                height={350}
                className="xl:w-4/5"
              /></>
          ) : (
            <div>Equipo</div>
          )}
        </div>
      </div>
    </main>
  );
}
