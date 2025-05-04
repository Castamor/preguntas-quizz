export type TEMAS = 'programacion' | 'videojuegos' | 'astrologia' | 'geografia';

export interface Respuesta {
   id: string;
   texto: string;
}

export interface Pregunta {
   id: string;
   tema: TEMAS;
   enunciado: string;
   respuestas: Respuesta[];
   idRespuestaCorrecta: string;
}