export function $(selector: string): Element | null {
   return document.querySelector(selector)
}

export function $$(selector: string): NodeListOf<Element> | null {
   return document.querySelectorAll(selector)
}

export function eliminarClasesActive(elemento: string) {
   const el = $$(elemento)
   el?.forEach((li) => { li.classList.remove('active') })
}

export function handleClaseActive<T extends HTMLElement> 
(evento: React.MouseEvent<T>, elementos: string ): boolean 
{
   const target = evento.currentTarget

   if (target.classList.contains('active')) return true
   eliminarClasesActive(elementos)
   target.classList.add('active')
   return false
}