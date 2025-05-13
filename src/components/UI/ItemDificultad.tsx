"use client"
import { handleClaseActive } from "@/config/utils"
import { useJuegoStore } from "@/store/juego"
import './ItemDificultad.css'

interface ItemDificultadProps { valor: string, }

export default function ItemDificultad({ valor }: ItemDificultadProps) {

   const dificultadStore = useJuegoStore(state => state.dificultad)
   const setDificultad = useJuegoStore(state => state.setDificultad)

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const activo = handleClaseActive(e, '.dificultad')
      if (activo) return

      setDificultad(valor)
   }

   return (
      <button
         type="button"
         title={valor}
         onClick={handleClick}
         className={`dificultad ${(dificultadStore === valor) ? 'active' : ''} p-2 capitalize cursor-pointer rounded-xl`}
      >
         {valor}
      </button >
   )
}