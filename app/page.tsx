export default function Home() {

    const TEMAS = [
        {
            nombre: 'Programación',
            goTo: '/programacion',
        },
        {
            nombre: 'Videojuegos',
            goTo: '/videojuegos',
        },
        {
            nombre: 'Astrología',
            goTo: '/astrologia',
        },
        {
            nombre: 'Geografía',
            goTo: '/geografia',
        },
    ]

    return (
        <div className="grid grid-rows-[0px_1fr_0px] items-center min-h-screen gap-16 mx-auto">
            <main className="flex flex-col gap-[32px] row-start-2 ">
                <div>
                    <h1 className="font-bold text-3xl text-center text-amber-300 uppercase">Preguntas Quizz</h1>

                    <p className="text-xl font-bold mt-6">Vamos a jugar</p>
                    <p className="font-light">Elige un tema y prueba tus capacidades.</p>
                </div>

                <ul className="grid grid-cols-2 grid-rows-2 text-center gap-4 aspect-square max-w-[20rem] mx-auto">
                    {TEMAS.map(({ nombre, goTo }) => (
                        <li key={nombre} className="border flex items-center justify-center font-semibold uppercase cursor-pointer rounded-xl p-8">
                            {nombre}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
