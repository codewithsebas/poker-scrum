import { CodeXml, MoveRight } from "lucide-react";

export default async function FormSignUp() {
  return (
    <div className="flex w-full h-full justify-center max-w-xs flex-col gap-4 sm:max-w-sm md:px-0 md:pb-4 2xl:max-w-md">
      <div className="flex flex-col gap-1 text-dark">
        <h2 className="text-2xl font-semibold">Planea sprints en equipo</h2>
        <p className="text-sm font-normal">
          Una mejor forma de estimar tareas e historias de usuario.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-3  border rounded-lg pe-2 hover:border-black/70 duration-150 transition">
          <input className="w-full bg-transparent outline-none py-2 px-2.5 pe-0" type="text" id="name" placeholder="Nombre del Sprint" autoFocus />
          <label htmlFor="name"><CodeXml id="name" size={20} className="text-black/30 h-full" /></label>
        </div>
        <button className="w-full group flex gap-2 items-center justify-center px-2 py-2.5 bg-black text-white rounded-lg hover:bg-black/90 transition duration-200">
          Empezar <MoveRight size={17} className="duration-200 group-hover:-rotate-45 transition" />
        </button>
      </div>
    </div>
  )
}
