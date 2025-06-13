"use client"

import { useDificultad, useTema } from "@/store/juego"
import { useEffect, useState } from "react"
import Link from "next/link"
import { NADA } from "@/config"

export default function Jugar() {

   const temaStore = useTema()
   const dificultadStore = useDificultad()
   const [sePuedeJugar, setSePuedeJugar] = useState(false)

   const hayTema = temaStore !== NADA
   const hayDificultad = dificultadStore !== NADA

   useEffect(() => {
      setSePuedeJugar(hayTema && hayDificultad)
   }, [hayTema, hayDificultad])

   function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
      if (!sePuedeJugar) {
         e.preventDefault()
         return
      }

   }

   return (
      <Link
         type="button"
         href={`/juego/${temaStore}`}
         className={`
            btn-juego py-2 px-4 mx-auto rounded-2xl transition-colors duration-75
            ${sePuedeJugar ? "bg-blue-500 cursor-pointer" : "bg-blue-400 cursor-not-allowed"}
         `}
         onClick={handleClick}
      >
         Jugar
      </Link>
   )

}