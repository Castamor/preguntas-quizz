"use client"
import { Tema as TemaType } from '@/config/types'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useJuegoStore } from '@/store/juego'
import { handleClasesActives } from '@/helpers'
import { NADA } from '@/config'
import './ItemTema.css'

interface ItemTemaProps extends PropsWithChildren {
   tema: TemaType
}

export default function ItemTema({ tema, children }: ItemTemaProps) {

   const temaStore = useJuegoStore(state => state.tema)
   const setTemaStore = useJuegoStore(state => state.setTema)
   const [estaActivo, setEstaActivo] = useState(false)

   useEffect(() => {
      handleClasesActives('.itemTema')
      setEstaActivo(temaStore === tema.slug)
   }, [tema.slug, temaStore])

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const item = e.currentTarget.classList

      if (item.contains('active')) {
         item.toggle('active')
         setTemaStore(NADA)
         return
      }
      setTemaStore(tema.slug)
   }

   return (
      <button
         type="button"
         title={tema.texto}
         className={`itemTema ${tema.slug} ${estaActivo ? 'active' : ''} cursor-pointer`}
         onClick={handleClick}
      >
         <div className="bg-neutral-100 aspect-square rounded-2xl">{children}</div>
         <p className='capitalize'>{tema.texto}</p>
      </button >
   )
}