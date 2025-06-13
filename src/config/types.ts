export type Dificultad = 'normal' | 'dificil'| '';
export type Tema = 'programacion'|'videojuegos'|'entretenimiento'|'astronomia'|'programación'|'astronomía'| ''

export interface Respuesta {
   id: string;
   texto: string;
}

export interface Pregunta {
   id: string;
   dificultad: Dificultad;
   enunciado: string;
   respuestas: Respuesta[];
   idRespuestaCorrecta: string;
}

export interface TemaInfo {
   texto: Tema;
   slug: Tema;
}

export interface EstructuraTema {
   [tema: string]: TemaInfo
}

export interface EstructuraDificultad {
   [dificultad: string]: {
      texto: Dificultad;
      tiempo_por_pregunta: number;
      total_preguntas: number;
   }
}

export interface PreguntasPorTema {
  [tema: string]: Pregunta[];
}