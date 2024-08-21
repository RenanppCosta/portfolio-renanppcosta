import { useState } from "react"

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="md:hidden" onClick={toggleMenu}>
                <i className="fa-solid fa-bars text-white text-3xl"></i>
            </button>

            <nav
                className={`nav-mobile w-full h-full gap-5 flex items-center justify-center flex-col fixed top-0 left-0 z-50 duration-500 ${
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
            >
                <button className="mt-4" onClick={toggleMenu}>
                    <i className="fa-solid fa-x text-white text-xl"></i>
                </button>

                <ul className="flex items-center flex-col h-full gap-5">
                    <li className="text-white"><a href="#">Sobre</a></li>
                    <li className="text-white"><a href="#">Projetos</a></li>
                    <li className="text-white"><a href="#">Contato</a></li>
                </ul>
            </nav>
        </>
    );
}