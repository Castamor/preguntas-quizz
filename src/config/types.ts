export interface Respuesta {
   id: string;
   texto: string;
}

export interface Pregunta {
   id: string;
   enunciado: string;
   respuestas: Respuesta[];
   idRespuestaCorrecta: string;
}