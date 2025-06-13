import { EstructuraDificultad, EstructuraTema } from "@/config/types"

export const DIFICULTADES: EstructuraDificultad = {
   normal: {
      texto: 'normal',
      tiempo_por_pregunta: 20,
      total_preguntas: 10,
   },
   dificil:{
      texto: 'dificil',
      tiempo_por_pregunta: 10,
      total_preguntas: 20,
   },
}

export const TEMAS: EstructuraTema = {
   programacion: { texto: 'programación', slug: 'programacion' },
   videojuegos: { texto: 'videojuegos', slug: 'videojuegos' },
   entretenimiento: { texto: 'entretenimiento', slug: 'entretenimiento' },
   astronomía: { texto: 'astronomía', slug: 'astronomia' },
}

export const NADA = ""