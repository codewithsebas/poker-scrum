import { ArrowUpCircle, CodeXml } from "lucide-react";

export default async function FormSignUp() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 sm:max-w-sm md:px-0 md:pb-4 2xl:max-w-md">
      <div className="flex flex-col gap-1 text-dark">
        <h2 className="text-2xl font-semibold">Planea sprints en equipo</h2>
        <p className="text-sm font-normal">
          Una mejor forma de estimar tareas e historias de usuario.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-1  border rounded-lg pe-2 hover:border-black/70 duration-150 transition">
          <input className="w-full bg-transparent outline-none py-2 px-2.5" type="text" id="name" placeholder="Nombre del Sprint" autoFocus />
          <CodeXml size={20} className="text-black/30 h-full" />
        </div>
        <button className="w-full group flex gap-1 items-center justify-center px-2 py-2.5 bg-black text-white rounded-lg hover:bg-black/90 transition duration-150">
          Empezar <ArrowUpCircle size={20} className="duration-150 group-hover:rotate-90" />
        </button>
      </div>
    </div>
  )
}
