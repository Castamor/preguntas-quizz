import Link from "next/link";
import { TEMAS } from "@/data/temas";

export default function SelectorTemas() {

   return (
      <section className="grid grid-cols-2 grid-rows-2 text-center gap-4 aspect-square max-w-[20rem] mx-auto">
         {TEMAS.map(({ nombre, href }) => (
            <Link
               key={nombre}
               href={`/tema/${href}`}
               className="border flex items-center justify-center font-semibold uppercase cursor-pointer rounded-xl p-8"
            >
               {nombre}
            </Link>
         ))}
      </section>
   )

}