import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

import React, { useState, useEffect, useRef } from "react";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest("#nav-open")) {
            setIsOpen(false);
        }
    };

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleResize);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <header>
                <nav id="nav" className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-blue-600 shadow-blue-500/50 shadow-2xl ">
                    <div className="p-4 flex items-center justify-center">
                        <div className="flex items-center justify-center gap-5 font-extrabold tracking-widest text-xl">
                            <FontAwesomeIcon icon={faLaptopCode} />
                            <h2 className={`drop-shadow-md ${styles.hero} ${styles.glitch} ${styles.layers}`}>Israel Dev</h2>
                        </div>
                    </div>
                    {/* nav tablet y celular */}
                    <div className="p-4 hidden md:flex flex-row justify-between font-bold items-center">
                        <a id="hide-after-click" href="#productos&servicios" className="px-5 relative text-xl  after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center drop-shadow-md">
                            Acerca de
                        </a>
                        <a href="#sobre_nosotros" className="px-5 relative text-xl  after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center drop-shadow-md">
                            Proyectos
                        </a>
                        <a href="#contacto" className="px-5 relative text-xl  after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center drop-shadow-md">
                            Contacto
                        </a>
                        <SecondaryBtn />
                    </div>

                    {/* btn nav */}
                    <div id="nav-open" className="p-4 md:hidden flex items-center">
                        <button onClick={toggleMenu} className="relative group">
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}>
                                    <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 ${isOpen ? "translate-x-10" : "translate-x-0"}`} />
                                    <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? "translate-x-10 delay-75" : "translate-x-0"}`} />
                                    <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 ${isOpen ? "translate-x-10" : "translate-x-0"}`} />
                                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${isOpen ? "translate-x-0 w-12" : "-translate-x-10 w-0"}`}>
                                        <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`} />
                                        <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${isOpen ? "-rotate-45" : "-rotate-0"}`} />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </nav>
            </header>
            {/* nav abierto en mobile */}
            <div ref={menuRef} id="nav-opened" className={`fixed left-0 right-0 top-8 ${isOpen ? "block" : "hidden"} bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10 `}>
                <div className="p-2 divide-gray-600 flex flex-col ">
                    <a href="#productos&servicios" className="p-2 font-semibold hover:text-[#00a14a]">
                        Productos y servicio
                    </a>
                    <a href="#sobre_nosotros" className="p-2 font-semibold hover:text-[#00a14a]">
                        Sobre nosotros
                    </a>
                    <a href="#contacto" className="p-2 font-semibold hover:text-[#00a14a]">
                        Contacto
                    </a>
                </div>
            </div>
            <div id="up" className={`flex  justify-center items-center h-screen ${styles.bg}`}>
                {/* hero bg */}
                <div className=" justify-center items-center ">
                    <div className={`${styles.threeD}`}><h1 className="mb-10">Israel Pinto</h1></div>
                    <h2 className={`relative top-16 text-4xl font-bold text-slate-800 bg-clip-text ${styles.hero__subtitle} ${styles.typingDemo}`}>Desarrollador FrontEnd</h2>

                    <div className="flex gap-20 mt-24 justify-center items-center">
                        <div id="twitter" className={`${styles.socialBtn} ${styles.flexCenter} justify-center items-center`}>
                        <svg fill="#211c1c"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            <span>WhatsApp</span>
                        </div>
                        <div id="linkedin" className={`${styles.socialBtn}  ${styles.flexCenter}`}>
                            <svg fill="#211c1c" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            <span>Linkedin</span>
                        </div>
                        <div id="github" className={`${styles.socialBtn} ${styles.flexCenter}`}>
                            <svg  fill="#211c1c" viewBox="0 0 24 24" height={24} width={24}  xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>Github</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={`flex ${styles.socialLinks}`}>
                <div id="twitter" className={`${styles.socialBtn} ${styles.flexCenter}`}>
                    <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    <span>@example</span>
                </div>
                <div id="linkedin" className={`${styles.socialBtn} ${styles.flexCenter}`}>
                    <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    <span>Linkedin</span>
                </div>
                <div id="github" className={`${styles.socialBtn} ${styles.flexCenter}`}>
                    <svg viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>example</span>
                </div>
            </div> */}
        </>
    );
};

export default Header;
