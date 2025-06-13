"use client"
import { obtenerInfoDificultad, obtenerPreguntas } from "@/helpers"
import { useDificultad, useTema } from "@/store/juego"
import { useEffect } from "react"

export default function Programacion() {

   const temaStore = useTema()
   const dificultadStore = useDificultad()

   useEffect(() => {
      obtenerInfoDificultad(dificultadStore)
      obtenerPreguntas(temaStore, dificultadStore, 3)
   })

   return (
      <>
      </>
   )

}