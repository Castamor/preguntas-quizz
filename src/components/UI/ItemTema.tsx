"use client"
import './ItemTema.css'
import { handleClaseActive } from '@/config/utils'

interface ItemTemaProps {
   tema: string
   children?: React.ReactNode
}

export default function ItemTema({ tema, children }: ItemTemaProps) {

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      handleClaseActive(e, '.item')

      console.log(`guardando el tema: '${tema}' en localStorage`)
   }

   return (
      <button
         type="button"
         title={tema}
         className="item cursor-pointer"
         onClick={handleClick}
      >
         <div className="bg-neutral-100 aspect-square rounded-xl">{children}</div>
         <p>{tema}</p>
      </button>
   )
}