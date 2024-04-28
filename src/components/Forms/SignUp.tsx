import Link from "next/link"
import { AuthButtonServer } from "../Auth/auth-button-server"

const FormSignUp = () => {
  return (
    <div className="flex max-w-xs flex-col gap-5 sm:max-w-sm md:px-0 md:pb-4 2xl:max-w-md">
      <div className="flex flex-col gap-1 text-dark">
        <h2 className="text-2xl font-semibold">Simplificando Historias de Usuario</h2>
        <p className="text-sm font-normal">
          Facilita las tareas para historias de usuario.  {" "}
          <Link href="/" className="font-semibold text-purple hover:underline">
            Poker Scrum
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <AuthButtonServer />
        {/* <AuthGoogle className="flex w-full items-center justify-between gap-2 rounded-lg border border-blue-600 bg-blue-600 p-1 pe-4 text-sm font-semibold text-white duration-300 hover:border-blue-500 hover:bg-blue-500" />
        <AuthGithub className="flex w-full items-center justify-between gap-2 rounded-lg border border-black bg-black p-1 pe-4 text-sm font-semibold text-white duration-300 hover:border-black hover:bg-black/80" />
        <HandleSignOut className="flex w-full items-center justify-center gap-2 rounded-lg border border-black/80 bg-black/80 p-2 pe-4 text-sm font-semibold text-white duration-300 hover:border-black hover:bg-black" /> */}
      </div>
    </div>
  )
}

export default FormSignUp
