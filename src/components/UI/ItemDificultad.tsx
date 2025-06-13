"use client"
import { useEffect, useState } from 'react'
import { handleClasesActives } from '@/helpers'
import { useActionsJuego, useDificultad } from '@/store/juego'
import { type Dificultad } from '@/config/types'
import { NADA } from '@/config'
import './ItemDificultad.css'

interface ItemDificultadProps {
   valor: Dificultad
}
export default function ItemDificultad({ valor }: ItemDificultadProps) {

   const dificultadStore = useDificultad()
   const { setDificultad } = useActionsJuego()
   const [estaActivo, setEstaActivo] = useState(false)

   useEffect(() => {
      handleClasesActives('.dificultad')
      setEstaActivo(dificultadStore === valor)
   }, [dificultadStore, valor])

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const item = e.currentTarget.classList

      if (item.contains('active')) {
         item.toggle('active')
         setDificultad(NADA)
         return
      }

      setDificultad(valor)
   }

   return (
      <button
         type="button"
         title={valor}
         onClick={handleClick}
         className={`dificultad ${estaActivo ? 'active' : ''} p-2 capitalize cursor-pointer rounded-xl`}
      >
         {valor}
      </button >
   )
}