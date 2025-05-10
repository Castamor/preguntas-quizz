"use client"
import { handleClaseActive } from '@/config/utils'
import { useJuegoStore } from '@/store/juego'
import './ItemTema.css'

interface ItemTemaProps {
   tema: string
   children?: React.ReactNode
}

export default function ItemTema({ tema, children }: ItemTemaProps) {

   const temaStore = useJuegoStore((state) => state.tema)
   const setTema = useJuegoStore((state) => state.setTema)

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const activo = handleClaseActive(e, '.item')
      if (activo) return

      setTema(tema)
   }

   return (
      <button
         type="button"
         title={tema}
         className={`item ${(temaStore === tema ? 'active' : '')} cursor-pointer`}
         onClick={handleClick}
      >
         <div className="bg-neutral-100 aspect-square rounded-xl">{children}</div>
         <p className='capitalize'>{tema}</p>
      </button >
   )
}