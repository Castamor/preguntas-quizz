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