"use client"
import { handleClaseActive } from "@/config/utils"
import { DIFICULTADES } from "@/config/config"
import './ItemDificultad.css'

interface ItemDificultadProps { valor: string }

export default function ItemDificultad({ valor }: ItemDificultadProps) {

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      handleClaseActive(e, '.dificultad')

      console.log('hola')
   }

   return (
      <button
         type="button"
         title={valor}
         onClick={handleClick}
         className={`dificultad ${(valor == DIFICULTADES.normal.texto) ? 'active' : ''} p-2 capitalize cursor-pointer rounded-lg`}
      >
         {valor}
      </button >
   )
}