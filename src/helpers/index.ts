import { DIFICULTADES } from "@/config"
import { PREGUNTAS } from "@/config/preguntas"
import { 
   type Dificultad as DificultadType,
   type Tema as TemaType 
} from "@/config/types"

export function $(selector: string): Element | null {
   return document.querySelector(selector)
}

export function $$(selector: string): NodeListOf<Element> | null {
   return document.querySelectorAll(selector)
}

export function handleClasesActives(elementos: string) {
   const els = $$(elementos)
   els?.forEach(li => {
      li.classList.remove('active')
   })
}

export function obtenerPreguntas (temaStore: TemaType, dificultadStore: DificultadType, cantidadPreguntas: number) {
   const filtradas = PREGUNTAS[temaStore]?.filter(({dificultad}) => dificultad === dificultadStore) || []
   const desordenadas = filtradas?.sort(() => Math.random() - 0.5).slice(0, cantidadPreguntas) || []
   return desordenadas
}

export function obtenerInfoDificultad(dificultadStore: DificultadType) {
   const info = Object.values(DIFICULTADES).filter(dificultad => dificultad.texto === dificultadStore)[0]
   return info
}