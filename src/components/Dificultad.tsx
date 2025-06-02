import ItemDificultad from "./UI/ItemDificultad";
import { DIFICULTADES } from "@/config";

export default function Dificultad() {
   return (
      <fieldset className="bg-black/30 mx-auto py-2 px-4 rounded-2xl w-fit">
         <legend className="text-amber-300">Selecciona la dificultad:</legend>
         <div className="flex justify-center items-center gap-2 mx-auto">
            <ItemDificultad valor={DIFICULTADES.normal.texto} />
            <ItemDificultad valor={DIFICULTADES.dificil.texto} />
         </div>
      </fieldset>
   )
}