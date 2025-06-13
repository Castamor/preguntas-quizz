/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { NADA } from '@/config'
import { 
   type Tema as Temas,
   type Dificultad as Dificultades, 
   type Pregunta 
} from '@/config/types'

type JuegoStore = {
   tema: Temas,
   dificultad: Dificultades
   preguntas?: Pregunta[]

   actions: {
      setTema: (nuevoTema: Temas) => void
      setDificultad: (nuevaDificultad: Dificultades) => void
   }
}

const useJuegoStore = create<JuegoStore>()(
   persist(
      (set) => ({
         tema: NADA,
         dificultad: NADA,

         actions: {
            setTema: (nuevoTema) => set({tema: nuevoTema}),
            setDificultad: (nuevaDificultad) => set({dificultad: nuevaDificultad}),
         }
      }),
      { 
         name: 'juego-storage', 
         partialize: (state) => ({ // Persiste solo el tema y la dificultad
            tema: state.tema,
            dificultad: state.dificultad,
         })
      }
   ),
)

export const useTema = () => useJuegoStore((state) => state.tema)
export const useDificultad = () => useJuegoStore((state) => state.dificultad)
export const useActionsJuego = () => useJuegoStore((state) => state.actions)