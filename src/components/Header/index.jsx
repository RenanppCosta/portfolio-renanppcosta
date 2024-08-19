import HamburgerMenu from "../HamburgerMenu"

export default function Header(){
    return(
        <>
            <header className="w-full h-24 flex justify-center items-center px-5">
                <div className="w-full max-w-7xl flex justify-between">
                    <h1 className="text-2xl md:text-3xl text-white hover:rotate-3 duration-300 cursor-pointer"> &lt;renanppcosta/&gt; </h1>
                    <nav>
                        <ul className="hidden md:flex items-center h-full gap-16">
                            <li className="text-white"><a href="#">Sobre</a></li>
                            <li className="text-white"><a href="#">Projetos</a></li>
                            <li className="text-white"><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                    <HamburgerMenu />
                </div>
            </header>
        </>
    )
}