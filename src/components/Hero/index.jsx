export default function Hero() {
    return (
        <main className="min-h-screen flex flex-col mt-36">
            <div className="flex flex-col items-center gap-8 p-4">
                <h2 className="text-white text-center text-2xl md:text-4xl font-thin flex flex-col">
                    Olá👋 <span className="text-5xl md:text-7xl font-normal my-3">Meu nome é Renan Costa</span> Desenvolvedor Full Stack
                </h2>
                <a href="/pdf/CV-Renan_Pinto_Pereira_da_Costa.pdf" className="btn-cv text-white rounded-lg p-1 w-32 border text-center" target="_blank" rel="noopener noreferrer">
                    Baixar CV
                </a>
                <div className="container-links text-white flex gap-7 text-3xl md:text-4xl">
                    <a href="https://github.com/RenanppCosta" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/renan-costa-1a5539235/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:renanppcosta@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </main>
    );
}