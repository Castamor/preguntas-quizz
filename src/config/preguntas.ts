import { PreguntasPorTema } from "@/config/types";

export const PREGUNTAS: PreguntasPorTema = {
   programacion: [   
      // 50 preguntas de dificultad normal
      {
         id: 'prog-001',
         dificultad: 'normal',
         enunciado: "¿Qué lenguaje se utiliza principalmente para el desarrollo de aplicaciones web del lado del cliente?",
         respuestas: [
            { id: 'a', texto: 'Python' },
            { id: 'b', texto: 'JavaScript' },
            { id: 'c', texto: 'C++' },
            { id: 'd', texto: 'Java' }
         ],
         idRespuestaCorrecta: 'b'
      },
      {
         id: 'prog-002',
         dificultad: 'normal',
         enunciado: "El protocolo HTTP se basa en el modelo de comunicación cliente-servidor.",
         respuestas: [
            { id: 'a', texto: 'servidor' },
            { id: 'b', texto: 'par' },
            { id: 'c', texto: 'distribuido' },
            { id: 'd', texto: 'concurrente' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'prog-003',
         dificultad: 'normal',
         enunciado: "JavaScript es un lenguaje fuertemente tipado.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'b'
      },
      // ... 47 preguntas más de dificultad normal

      // 50 preguntas de dificultad dificil
      {
         id: 'prog-051',
         dificultad: 'dificil',
         enunciado: "¿Cuál es la principal diferencia entre programación funcional y programación orientada a objetos?",
         respuestas: [
            { id: 'a', texto: 'El manejo de estado y efectos secundarios' },
            { id: 'b', texto: 'La sintaxis del lenguaje' },
            { id: 'c', texto: 'El rendimiento en tiempo de ejecución' },
            { id: 'd', texto: 'El uso de memoria' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'prog-052',
         dificultad: 'dificil',
         enunciado: "En TypeScript, los genéricos permiten definir componentes reutilizables que trabajan con múltiples tipos.",
         respuestas: [
            { id: 'a', texto: 'tipos' },
            { id: 'b', texto: 'interfaces' },
            { id: 'c', texto: 'funciones' },
            { id: 'd', texto: 'clases' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'prog-053',
         dificultad: 'dificil',
         enunciado: "La técnica de memoización en programación se utiliza para optimizar funciones puras.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'a'
      },
      // ... 47 preguntas más de dificultad dificil
   ],

   astronomia: [
      // 50 preguntas de dificultad normal
      {
         id: 'astro-001',
         dificultad: 'normal',
         enunciado: "¿Cuál es el planeta más cercano al Sol?",
         respuestas: [
            { id: 'a', texto: 'Venus' },
            { id: 'b', texto: 'Mercurio' },
            { id: 'c', texto: 'Marte' },
            { id: 'd', texto: 'Tierra' }
         ],
         idRespuestaCorrecta: 'b'
      },
      {
         id: 'astro-002',
         dificultad: 'normal',
         enunciado: "El satélite natural de la Tierra es la Luna.",
         respuestas: [
            { id: 'a', texto: 'Luna' },
            { id: 'b', texto: 'Estrella' },
            { id: 'c', texto: 'Cometa' },
            { id: 'd', texto: 'Planeta' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'astro-003',
         dificultad: 'normal',
         enunciado: "La Vía Láctea es una galaxia espiral.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'a'
      },
      // ... 47 preguntas más de dificultad normal

      // 50 preguntas de dificultad dificil (solo astronomía, sin física o matemáticas)
      {
         id: 'astro-051',
         dificultad: 'dificil',
         enunciado: "¿Qué ley de Kepler describe que el radio vector de un planeta barre áreas iguales en tiempos iguales?",
         respuestas: [
            { id: 'a', texto: 'Primera ley' },
            { id: 'b', texto: 'Segunda ley' },
            { id: 'c', texto: 'Tercera ley' },
            { id: 'd', texto: 'Ley de gravitación' }
         ],
         idRespuestaCorrecta: 'b'
      },
      {
         id: 'astro-052',
         dificultad: 'dificil',
         enunciado: "¿Cómo se llama la Gran Mancha Roja de Júpiter?",
         respuestas: [
            { id: 'a', texto: 'Gran Mancha Roja' },
            { id: 'b', texto: 'Mancha Oscura' },
            { id: 'c', texto: 'Espuma Joviana' },
            { id: 'd', texto: 'Vórtice Polar' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'astro-053',
         dificultad: 'dificil',
         enunciado: "La radiación de fondo de microondas es evidencia del Big Bang.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'a'
      },
      // ... 47 preguntas más de dificultad dificil
   ],

   entretenimiento: [
      // 50 preguntas de dificultad normal
      {
         id: 'entre-001',
         dificultad: 'normal',
         enunciado: "¿Quién creó la serie de televisión 'Breaking Bad'?",
         respuestas: [
            { id: 'a', texto: 'Vince Gilligan' },
            { id: 'b', texto: 'David Chase' },
            { id: 'c', texto: 'Shonda Rhimes' },
            { id: 'd', texto: 'J.J. Abrams' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'entre-002',
         dificultad: 'normal',
         enunciado: "En 'Game of Thrones', la familia Stark gobierna sobre el territorio de Invernalia.",
         respuestas: [
            { id: 'a', texto: 'Invernalia' },
            { id: 'b', texto: 'Desembarco del Rey' },
            { id: 'c', texto: 'Rocadragón' },
            { id: 'd', texto: 'Altojardín' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'entre-003',
         dificultad: 'normal',
         enunciado: "La película 'Titanic' ganó 11 premios Oscar.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'a'
      },
      // ... 47 preguntas más de dificultad normal

      // 50 preguntas de dificultad dificil
      {
         id: 'entre-051',
         dificultad: 'dificil',
         enunciado: "¿Qué director ganó el Oscar a Mejor Director por 'El Padrino Part II'?",
         respuestas: [
            { id: 'a', texto: 'Francis Ford Coppola' },
            { id: 'b', texto: 'Martin Scorsese' },
            { id: 'c', texto: 'Steven Spielberg' },
            { id: 'd', texto: 'Roman Polanski' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'entre-052',
         dificultad: 'dificil',
         enunciado: "En la saga 'Star Wars', el planeta natal de Chewbacca es Kashyyyk.",
         respuestas: [
            { id: 'a', texto: 'Kashyyyk' },
            { id: 'b', texto: 'Tatooine' },
            { id: 'c', texto: 'Coruscant' },
            { id: 'd', texto: 'Endor' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'entre-053',
         dificultad: 'dificil',
         enunciado: "La serie 'The Crown' se centra en la vida de la Reina Isabel II.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'a'
      },
      // ... 47 preguntas más de dificultad dificil
   ],

   videojuegos: [
      // 50 preguntas de dificultad normal
      {
         id: 'game-001',
         dificultad: 'normal',
         enunciado: "¿En qué año se lanzó el videojuego 'The Legend of Zelda'?",
         respuestas: [
            { id: 'a', texto: '1986' },
            { id: 'b', texto: '1989' },
            { id: 'c', texto: '1991' },
            { id: 'd', texto: '1984' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'game-002',
         dificultad: 'normal',
         enunciado: "En 'Super Mario Bros.', el hermano de Mario se llama Luigi.",
         respuestas: [
            { id: 'a', texto: 'Luigi' },
            { id: 'b', texto: 'Toad' },
            { id: 'c', texto: 'Yoshi' },
            { id: 'd', texto: 'Wario' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'game-003',
         dificultad: 'normal',
         enunciado: "El juego 'Minecraft' fue creado originalmente por Markus Persson.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'a'
      },
      // ... 47 preguntas más de dificultad normal

      // 50 preguntas de dificultad dificil
      {
         id: 'game-051',
         dificultad: 'dificil',
         enunciado: "¿Cuál es la técnica de renderizado introducida con 'Quake III Arena'?",
         respuestas: [
            { id: 'a', texto: 'Ray tracing' },
            { id: 'b', texto: 'Forward rendering' },
            { id: 'c', texto: 'Deferred shading' },
            { id: 'd', texto: 'Rasterización' }
         ],
         idRespuestaCorrecta: 'c'
      },
      {
         id: 'game-052',
         dificultad: 'dificil',
         enunciado: "En 'Dark Souls', la moneda del juego se llama Almas.",
         respuestas: [
            { id: 'a', texto: 'Almas' },
            { id: 'b', texto: 'Runas' },
            { id: 'c', texto: 'Orbes' },
            { id: 'd', texto: 'Gemas' }
         ],
         idRespuestaCorrecta: 'a'
      },
      {
         id: 'game-053',
         dificultad: 'dificil',
         enunciado: "La saga 'Halo' fue desarrollada originalmente por Bungie.",
         respuestas: [
            { id: 'a', texto: 'Verdadero' },
            { id: 'b', texto: 'Falso' }
         ],
         idRespuestaCorrecta: 'a'
      },
      // ... 47 preguntas más de dificultad dificil
   ],
};
