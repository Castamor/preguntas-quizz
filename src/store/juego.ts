import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { NADA } from '@/config'

type JuegoStore = {
   tema: string,
   // eslint-disable-next-line no-unused-vars
   setTema: (nuevoTema: string) => void
   dificultad: string
   // eslint-disable-next-line no-unused-vars
   setDificultad: (nuevaDificultad: string) => void
}

export const useJuegoStore = create<JuegoStore>()(
   persist(
      (set) => ({
         tema: NADA, // Por defecto, el tema está vacío
         setTema: (nuevoTema: string) => {
            set({tema: nuevoTema})
         },
         dificultad: NADA, // Por defecto, la dificultad está vacía
         setDificultad: (nuevaDificultad: string) => {
            set({dificultad: nuevaDificultad})
         }
      }),
      { name: 'juego-storage' }
   ),
)