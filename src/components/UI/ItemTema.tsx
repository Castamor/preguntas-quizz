"use client"
import { TemaInfo } from '@/config/types'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useActionsJuego, useTema } from '@/store/juego'
import { handleClasesActives } from '@/helpers'
import { NADA } from '@/config'
import './ItemTema.css'

interface ItemTemaProps extends PropsWithChildren {
   tema: TemaInfo
}

export default function ItemTema({ tema, children }: ItemTemaProps) {

   const temaStore = useTema()
   const { setTema } = useActionsJuego()
   const [estaActivo, setEstaActivo] = useState(false)

   useEffect(() => {
      handleClasesActives('.itemTema')
      setEstaActivo(temaStore === tema.slug)
   }, [tema.slug, temaStore])

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const item = e.currentTarget.classList

      if (item.contains('active')) {
         item.toggle('active')
         setTema(NADA)
         return
      }
      setTema(tema.slug)
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