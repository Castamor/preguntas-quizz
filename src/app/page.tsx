import SelectorTemas from "@components/SelectorTemas";

export default function Home() {

   return (
      <>
         <div>
            <h1 className="font-bold text-3xl text-center text-amber-300 uppercase">Preguntas Quizz</h1>

            <p className="text-xl font-bold mt-6">Vamos a jugar</p>
            <p className="font-light">Elige un tema y prueba tus capacidades.</p>
         </div>

         <SelectorTemas />
      </>
   );
}
