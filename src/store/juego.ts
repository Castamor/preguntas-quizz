import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type JuegoStore = {
   tema: string | "",
   // eslint-disable-next-line no-unused-vars
   setTema: (nuevoTema: string) => void
   dificultad: string | ""
   // eslint-disable-next-line no-unused-vars
   setDificultad: (nuevaDificultad: string) => void
}

export const useJuegoStore = create<JuegoStore>()(
   persist(
      (set) => ({
         tema: "",
         setTema: (nuevoTema: string) => {
            set({tema: nuevoTema})
         },
         dificultad: "",
         setDificultad: (nuevaDificultad: string) => {
            set({dificultad: nuevaDificultad})
         }
      }),
      { name: 'juego-storage' }
   ),
)