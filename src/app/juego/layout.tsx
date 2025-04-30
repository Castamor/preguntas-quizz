import Link from "next/link";

export default function LayoutTema({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <Link href='/'>Regresar</Link>
         <div>
            {children}
         </div>
      </>
   )
}