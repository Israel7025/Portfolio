import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./Contact.module.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_i1d8ozx", "template_btvxmoh", form.current, {
                publicKey: "SzWJVLvnJJ74zBYtN",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    function sendEmailBtn() {
        window.location = "mailto:israelpinto276@gmail.com?subject=Hola%20Israel%20estamos%20interesados%20en&body=%0D%0A%0D%0ASaludos%20cordiales.";
    }

    return (
        <>
            <div className="min-h-screen bg-white py-6 flex flex-col mb-16 justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="text-center pb-6 flex gap-y-7  justify-center items-center">
                            <h1 className="text-4xl font-bold  ">Contacto</h1>
                        </div>
                        <div className="grid gap-y-2 mb-9 w-[450px]">
                            <p className="text-gray-300">Enviame un email y me pondre en contacto!</p>
                            <a onClick={sendEmailBtn} className={`w-max cursor-pointer text-white`}>
                                o haz click aquí
                            </a>

                            <p className="text-gray-300">para ser redireccionado a su email y enviar el mensaje.</p>
                        </div>
                        {/* <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form> */}

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid gap-y-9">
                                <div className="relative bg-inherit">
                                    <input required type="text" id="user_name" name="user_name" className="peer bg-white h-10 w-full rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-400 focus:ring-sky-600 text-black focus:outline-none focus:border-rose-600" placeholder="Nombre" />
                                    <label
                                        htmlFor="user_name"
                                        className="absolute cursor-text left-0 -top-6 text-sm  bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-white peer-focus:text-sm transition-all"
                                    >
                                        Nombre
                                    </label>
                                </div>

                                <div className="relative bg-inherit">
                                    <input required type="text" id="user_email" name="user_email" className="peer bg-white h-10 w-full rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-400 focus:ring-sky-600 text-black focus:outline-none focus:border-rose-600" placeholder="Email" />
                                    <label
                                        htmlFor="user_email"
                                        className="absolute cursor-text left-0 -top-6 text-sm  bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-white peer-focus:text-sm transition-all"
                                    >
                                        Email
                                    </label>
                                </div>

                                <div className="relative bg-inherit">
                                    <input required type="text" id="from_name" name="from_name" className="peer bg-white h-10 w-full rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-400 focus:ring-sky-600 text-black focus:outline-none focus:border-rose-600" placeholder="Asunto" />
                                    <label
                                        htmlFor="from_name"
                                        className="absolute cursor-text left-0 -top-6 text-sm  bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-white peer-focus:text-sm transition-all"
                                    >
                                        Asunto
                                    </label>
                                </div>

                                <textarea
                                    maxlength="500"
                                    required
                                    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Escriba su mensaje"
                                    name="message"
                                    style={{ height: 121 }}
                                    defaultValue={""}
                                />
                                <div className="flex justify-between">
                                    <input value="Borrar" className="cursor-pointer rounded-lg px-2 py-2 border-2 border-cyan-500 text-white hover:bg-blue-200 hover:border-indigo-600 hover:text-indigo-900 duration-300" type="reset" />
                                    <button value="Enviar" className=" w-80 shadow bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" defaultValue="Send ➤">
                                        Enviar
                                        <FontAwesomeIcon icon={faPaperPlane} className="ml-4" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

{
    /* <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" /> */
}
