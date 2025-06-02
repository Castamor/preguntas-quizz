import { TEMAS } from '@/config'
import ItemTema from './UI/ItemTema'

export default function Temas() {

   return (
      <ul className="grid grid-cols-2 grid-rows-2 text-center gap-4 max-w-[20rem] mx-auto">
         <ItemTema tema={TEMAS.programacion}></ItemTema>
         <ItemTema tema={TEMAS.videojuegos}></ItemTema>
         <ItemTema tema={TEMAS.entretenimiento}></ItemTema>
         <ItemTema tema={TEMAS.astronomía}></ItemTema>
      </ul >
   )

}