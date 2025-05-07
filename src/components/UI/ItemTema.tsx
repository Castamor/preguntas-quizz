"use client"
import './ItemTema.css'
import { eliminarClasesActive } from '@/config/utils'

interface ItemTemaProps {
   tema: string
   children?: React.ReactNode
}

export default function ItemTema({ tema, children }: ItemTemaProps) {

   function handleClick(e: React.MouseEvent<HTMLLIElement>) {
      if (e.currentTarget.classList.contains('active')) return

      eliminarClasesActive('.item')
      e.currentTarget.classList.add('active')
      console.log(`guardando el tema: '${tema}' en localStorage`)
   }

   return (
      <li
         className="item cursor-pointer"
         onClick={handleClick}
      >
         <div className="bg-neutral-100 aspect-square rounded-xl">{children}</div>
         <p>{tema}</p>
      </li>
   )
}