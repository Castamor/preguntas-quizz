import BotonJugar from "@/components/BotonJugar";
import SeccionBienvenida from "@/components/SeccionBienvenida";
import SelectorDificultad from "@/components/SelectorDificultad";
import SelectorTemas from "@components/SelectorTemas";

export default function Home() {

   return (
      <>
         <SeccionBienvenida />
         <SelectorDificultad />
         <SelectorTemas />
         <BotonJugar />
      </>
   );
}
