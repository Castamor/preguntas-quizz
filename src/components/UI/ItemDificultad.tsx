"use client"
import { useEffect, useState } from 'react'
import './ItemDificultad.css'
import { handleClasesActives } from '@/helpers'
import { useJuegoStore } from '@/store/juego'
import { NADA } from '@/config'

interface ItemDificultadProps { valor: string, }

export default function ItemDificultad({ valor }: ItemDificultadProps) {

   const dificultadStore = useJuegoStore(state => state.dificultad)
   const setDificultadStore = useJuegoStore(state => state.setDificultad)
   const [estaActivo, setEstaActivo] = useState(false)

   useEffect(() => {
      handleClasesActives('.dificultad')
      setEstaActivo(dificultadStore === valor)
   }, [dificultadStore, valor])

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const item = e.currentTarget.classList

      if (item.contains('active')) {
         item.toggle('active')
         setDificultadStore(NADA)
         return
      }

      setDificultadStore(valor)
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