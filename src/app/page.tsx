import Jugar from "@/components/Jugar";
import Bienvenida from "@/components/Bienvenida";
import Dificultad from "@/components/Dificultad";
import Temas from "@/components/Temas";

export default async function Home() {

   return (
      <>
         <Bienvenida />
         <Dificultad />
         <Temas />
         <Jugar />
      </>
   );
}
