import ItemTema from './UI/ItemTema'

export default function Temas() {

   return (
      <ul className="grid grid-cols-2 grid-rows-2 text-center gap-4 max-w-[20rem] mx-auto">
         <ItemTema tema='Programación'></ItemTema>
         <ItemTema tema='Videojuegos'></ItemTema>
         <ItemTema tema='Entretenimiento'></ItemTema>
         <ItemTema tema='Astronomía'></ItemTema>
      </ul >
   )

}