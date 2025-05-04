import BotonJugar from "@/components/BotonJugar";
import Bienvenida from "@/components/Bienvenida";
import Dificultad from "@/components/Dificultad";
import Temas from "@/components/Temas";

export default async function Home() {

   return (
      <>
         <Bienvenida />
         <Dificultad />
         <Temas />
         <BotonJugar />
      </>
   );
}
