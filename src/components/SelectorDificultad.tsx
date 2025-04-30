export default function SelectorDificultad() {
   return (
      <fieldset className="bg-black/30 mx-auto py-2 px-4 rounded-2xl w-fit">
         <legend className="text-amber-300">Selecciona la dificultad:</legend>
         <div className="flex justify-center items-center gap-2 mx-auto">
            <div className="p-1">
               <input
                  type="radio"
                  name="dificultad"
                  id="normal"
                  value="normal"
                  className="cursor-pointer"
                  defaultChecked
               />
               <label htmlFor="normal" className="cursor-pointer">Normal</label>
            </div>
            <div className="p-1">
               <input
                  type="radio"
                  name="dificultad"
                  id="dificil"
                  value="dificil"
                  className="cursor-pointer"
               />
               <label htmlFor="dificil" className="cursor-pointer">Dificil</label>
            </div>
         </div>
      </fieldset>
   )
}