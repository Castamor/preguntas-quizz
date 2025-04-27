import type { Metadata } from "next";
import { Rubik } from 'next/font/google';
import "./globals.css";

export const rubik = Rubik({
   subsets: ['latin'],
   variable: '--font-rubik',
   display: 'swap',
});

export const metadata: Metadata = {
   title: "Preguntas Quizz",
   description: "Juego de preguntas y respuestas de varios temas",
   icons: {
      icon: "/favicon.svg",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es">
         <body
            className={`${rubik.className} antialiased contenido`}
         >
            <div className="grid grid-rows-[0px_1fr_0px] items-center min-h-screen gap-16 mx-auto">
               <main className="flex flex-col gap-[32px] row-start-2 ">
                  {children}
               </main>
            </div>
         </body>


      </html>
   );
}
