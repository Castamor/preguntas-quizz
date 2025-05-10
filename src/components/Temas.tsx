import { TEMAS } from '@/config/config'
import ItemTema from './UI/ItemTema'

export default function Temas() {

   return (
      <ul className="grid grid-cols-2 grid-rows-2 text-center gap-4 max-w-[20rem] mx-auto">
         <ItemTema tema={TEMAS.programacion.texto}></ItemTema>
         <ItemTema tema={TEMAS.videojuegos.texto}></ItemTema>
         <ItemTema tema={TEMAS.entretenimiento.texto}></ItemTema>
         <ItemTema tema={TEMAS.astronomía.texto}></ItemTema>
      </ul >
   )

}