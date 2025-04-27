import Link from "next/link";

export default function Home() {

   const TEMAS = [
      {
         nombre: 'Programación',
         href: '/programacion',
      },
      {
         nombre: 'Videojuegos',
         href: '/videojuegos',
      },
      {
         nombre: 'Astrología',
         href: '/astrologia',
      },
      {
         nombre: 'Geografía',
         href: '/geografia',
      },
   ]

   return (
      <div className="grid grid-rows-[0px_1fr_0px] items-center min-h-screen gap-16 mx-auto">
         <main className="flex flex-col gap-[32px] row-start-2 ">
            <div>
               <h1 className="font-bold text-3xl text-center text-amber-300 uppercase">Preguntas Quizz</h1>

               <p className="text-xl font-bold mt-6">Vamos a jugar</p>
               <p className="font-light">Elige un tema y prueba tus capacidades.</p>
            </div>

            <section className="grid grid-cols-2 grid-rows-2 text-center gap-4 aspect-square max-w-[20rem] mx-auto">
               {TEMAS.map(({ nombre, href }) => (
                  <Link
                     key={nombre}
                     href={href}
                     className="border flex items-center justify-center font-semibold uppercase cursor-pointer rounded-xl p-8"
                  >
                     {nombre}
                  </Link>
               ))}
            </section>
         </main>
      </div>
   );
}
