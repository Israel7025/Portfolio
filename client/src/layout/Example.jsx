import React, { useRef } from "react";

import styles from "./Example.module.css";

import placeholderimg from "../assets/img/placeholderimg.png";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const projects = [
    { title: "PROYECTO 1", image: placeholderimg, description: "Descripción del proyecto 1" },
    { title: "PROYECTO 2", image: placeholderimg, description: "Descripción del proyecto 2" },
    // Agrega más proyectos según sea necesario
];

const Example = () => {
    const cardCount = 5; // Cambia esto para el número deseado de tarjetas

    return (
        <>
            <div className="flex gap-36 flex-wrap justify-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
                <TiltCard title="PROYECTO 1" image={placeholderimg} description="Descripción del proyecto 1" />
                <TiltCard title="PROYECTO 2" image={placeholderimg} description="Descripción del proyecto 2" />

                <TiltCard title="PROYECTO 3" image={placeholderimg} description="Descripción del proyecto 2" />
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-5xl font-bold tracking-[12px]">#</h1>
            </div>
        </>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title, image, description }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <>
            <div className="flex gap-36">
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transformStyle: "preserve-3d",
                        transform,
                    }}
                    className="relative h-[32rem] w-[24rem] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 shadow-2xl"
                >
                    <div
                        style={{
                            transform: "translateZ(75px)",
                            transformStyle: "preserve-3d",
                        }}
                        className="absolute inset-4 grid rounded-xl bg-white shadow-lg"
                    >
                        <div
                            style={{
                                transform: "translateZ(50px)",
                            }}
                            className="text-center text-2xl font-bold border-green-300 border-4"
                        >
                            {title}
                            <div className="border-4 border-blue-400 flex justify-center ">
                                <img className="h-[170px]" src={placeholderimg} alt="" />
                            </div>
                            <div className="my-4">
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur esse in molestiae ratione veniam, officia animi modi vitae amet quisquam soluta rem facilis unde delectus minus sequi beatae iure asperiores.</p>
                            </div>
                            <div className="flex px-5 justify-center gap-10">
                                {/* Íconos SVG aquí */}
                                <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 228">
                                    {/* Path del SVG */}
                                </svg>
                                {/* Repite el SVG según sea necesario */}
                            </div>
                            <div className="flex my-8 gap-10 justify-center">
                                <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-2xl duration-300">Live Demo</button>
                                <button className={`rounded-2xl ${styles.uiBtn} gap-2`}>
                                    <svg fill="#FFF" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>Código</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transformStyle: "preserve-3d",
                        transform,
                    }}
                    className="relative h-[32rem] w-[24rem] rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 shadow-2xl"
                >
                    <div
                        style={{
                            transform: "translateZ(75px)",
                            transformStyle: "preserve-3d",
                        }}
                        className="absolute inset-4 grid rounded-xl bg-white shadow-lg"
                    >
                        <div
                            style={{
                                transform: "translateZ(50px)",
                            }}
                            className="text-center text-2xl font-bold border-green-300 border-4"
                        >
                            PROYECTO 1
                            <div className="border-4 border-blue-400 flex justify-center ">
                                <img className="h-[170px]" src={placeholderimg} alt="" />
                            </div>
                            <div className="my-4">
                                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur esse in molestiae ratione veniam, officia animi modi vitae amet quisquam soluta rem facilis unde delectus minus sequi beatae iure asperiores.</p>
                            </div>
                            <div className="flex px-5 justify-center gap-10">
                                <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 228">
                                    <path
                                        fill="#00D8FF"
                                        d="M210 74a171 171 0 0 0-8-3l2-5c6-31 2-55-12-63s-35 0-58 19a171 171 0 0 0-6 6 156 156 0 0 0-4-4C101 4 78-5 64 3S46 34 52 63a171 171 0 0 0 2 8l-10 3C17 83 0 98 0 114s19 31 47 41a146 146 0 0 0 7 2 167 167 0 0 0-2 9c-6 29-1 51 12 59 14 8 37-1 59-20a146 146 0 0 0 5-5 168 168 0 0 0 7 6c22 19 44 26 57 19 14-8 18-32 12-61a145 145 0 0 0-1-7l5-2c29-10 48-25 48-41s-18-31-46-40Zm-6 71-4 1-13-32 12-32 8 2c24 8 38 20 38 30s-16 22-41 31Zm-10 21c2 13 3 24 1 33s-5 14-9 16c-8 5-25-1-43-17a157 157 0 0 1-7-6l22-27c12-1 24-3 34-6a134 134 0 0 1 2 7ZM87 215c-8 2-14 2-18 0-8-4-11-22-7-47a157 157 0 0 1 2-8l35 5c7 10 14 19 22 27a135 135 0 0 1-5 5c-10 8-20 14-29 18Zm-37-70c-12-5-22-10-30-16-6-6-9-11-9-15 0-10 14-22 37-30l9-2 12 32-12 33a135 135 0 0 1-7-2Zm13-85c-5-24-2-43 6-47 9-5 28 2 48 20a144 144 0 0 1 3 3L99 63l-35 5a160 160 0 0 1-1-8Zm110 28a348 348 0 0 0-8-13l24 4-8 22a381 381 0 0 0-8-13Zm-45-44 15 18a322 322 0 0 0-30 0l15-18ZM83 88a323 323 0 0 0-7 13c-4-7-6-15-9-22l24-4a322 322 0 0 0-8 13Zm8 65-24-4 9-22a321 321 0 0 0 7 13l8 13Zm37 31-15-18a383 383 0 0 0 30 0l-15 18Zm53-58 8 23-24 4a382 382 0 0 0 8-13 347 347 0 0 0 8-14Zm-17 8a359 359 0 0 1-13 20 329 329 0 0 1-23 1l-23-1a310 310 0 0 1-13-19 307 307 0 0 1-11-21 310 310 0 0 1 11-21 307 307 0 0 1 13-19l23-1 23 1a329 329 0 0 1 13 19 358 358 0 0 1 11 21 329 329 0 0 1-11 20Zm22-122c9 5 12 25 7 51l-1 5-35-5-21-27a161 161 0 0 1 6-5c19-17 36-23 44-19Zm-58 79a23 23 0 1 1 0 46 23 23 0 0 1 0-46Z"
                                    />
                                </svg>
                                <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 228">
                                    <path
                                        fill="#00D8FF"
                                        d="M210 74a171 171 0 0 0-8-3l2-5c6-31 2-55-12-63s-35 0-58 19a171 171 0 0 0-6 6 156 156 0 0 0-4-4C101 4 78-5 64 3S46 34 52 63a171 171 0 0 0 2 8l-10 3C17 83 0 98 0 114s19 31 47 41a146 146 0 0 0 7 2 167 167 0 0 0-2 9c-6 29-1 51 12 59 14 8 37-1 59-20a146 146 0 0 0 5-5 168 168 0 0 0 7 6c22 19 44 26 57 19 14-8 18-32 12-61a145 145 0 0 0-1-7l5-2c29-10 48-25 48-41s-18-31-46-40Zm-6 71-4 1-13-32 12-32 8 2c24 8 38 20 38 30s-16 22-41 31Zm-10 21c2 13 3 24 1 33s-5 14-9 16c-8 5-25-1-43-17a157 157 0 0 1-7-6l22-27c12-1 24-3 34-6a134 134 0 0 1 2 7ZM87 215c-8 2-14 2-18 0-8-4-11-22-7-47a157 157 0 0 1 2-8l35 5c7 10 14 19 22 27a135 135 0 0 1-5 5c-10 8-20 14-29 18Zm-37-70c-12-5-22-10-30-16-6-6-9-11-9-15 0-10 14-22 37-30l9-2 12 32-12 33a135 135 0 0 1-7-2Zm13-85c-5-24-2-43 6-47 9-5 28 2 48 20a144 144 0 0 1 3 3L99 63l-35 5a160 160 0 0 1-1-8Zm110 28a348 348 0 0 0-8-13l24 4-8 22a381 381 0 0 0-8-13Zm-45-44 15 18a322 322 0 0 0-30 0l15-18ZM83 88a323 323 0 0 0-7 13c-4-7-6-15-9-22l24-4a322 322 0 0 0-8 13Zm8 65-24-4 9-22a321 321 0 0 0 7 13l8 13Zm37 31-15-18a383 383 0 0 0 30 0l-15 18Zm53-58 8 23-24 4a382 382 0 0 0 8-13 347 347 0 0 0 8-14Zm-17 8a359 359 0 0 1-13 20 329 329 0 0 1-23 1l-23-1a310 310 0 0 1-13-19 307 307 0 0 1-11-21 310 310 0 0 1 11-21 307 307 0 0 1 13-19l23-1 23 1a329 329 0 0 1 13 19 358 358 0 0 1 11 21 329 329 0 0 1-11 20Zm22-122c9 5 12 25 7 51l-1 5-35-5-21-27a161 161 0 0 1 6-5c19-17 36-23 44-19Zm-58 79a23 23 0 1 1 0 46 23 23 0 0 1 0-46Z"
                                    />
                                </svg>
                                <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 228">
                                    <path
                                        fill="#00D8FF"
                                        d="M210 74a171 171 0 0 0-8-3l2-5c6-31 2-55-12-63s-35 0-58 19a171 171 0 0 0-6 6 156 156 0 0 0-4-4C101 4 78-5 64 3S46 34 52 63a171 171 0 0 0 2 8l-10 3C17 83 0 98 0 114s19 31 47 41a146 146 0 0 0 7 2 167 167 0 0 0-2 9c-6 29-1 51 12 59 14 8 37-1 59-20a146 146 0 0 0 5-5 168 168 0 0 0 7 6c22 19 44 26 57 19 14-8 18-32 12-61a145 145 0 0 0-1-7l5-2c29-10 48-25 48-41s-18-31-46-40Zm-6 71-4 1-13-32 12-32 8 2c24 8 38 20 38 30s-16 22-41 31Zm-10 21c2 13 3 24 1 33s-5 14-9 16c-8 5-25-1-43-17a157 157 0 0 1-7-6l22-27c12-1 24-3 34-6a134 134 0 0 1 2 7ZM87 215c-8 2-14 2-18 0-8-4-11-22-7-47a157 157 0 0 1 2-8l35 5c7 10 14 19 22 27a135 135 0 0 1-5 5c-10 8-20 14-29 18Zm-37-70c-12-5-22-10-30-16-6-6-9-11-9-15 0-10 14-22 37-30l9-2 12 32-12 33a135 135 0 0 1-7-2Zm13-85c-5-24-2-43 6-47 9-5 28 2 48 20a144 144 0 0 1 3 3L99 63l-35 5a160 160 0 0 1-1-8Zm110 28a348 348 0 0 0-8-13l24 4-8 22a381 381 0 0 0-8-13Zm-45-44 15 18a322 322 0 0 0-30 0l15-18ZM83 88a323 323 0 0 0-7 13c-4-7-6-15-9-22l24-4a322 322 0 0 0-8 13Zm8 65-24-4 9-22a321 321 0 0 0 7 13l8 13Zm37 31-15-18a383 383 0 0 0 30 0l-15 18Zm53-58 8 23-24 4a382 382 0 0 0 8-13 347 347 0 0 0 8-14Zm-17 8a359 359 0 0 1-13 20 329 329 0 0 1-23 1l-23-1a310 310 0 0 1-13-19 307 307 0 0 1-11-21 310 310 0 0 1 11-21 307 307 0 0 1 13-19l23-1 23 1a329 329 0 0 1 13 19 358 358 0 0 1 11 21 329 329 0 0 1-11 20Zm22-122c9 5 12 25 7 51l-1 5-35-5-21-27a161 161 0 0 1 6-5c19-17 36-23 44-19Zm-58 79a23 23 0 1 1 0 46 23 23 0 0 1 0-46Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex my-8 gap-10 justify-center">
                                <button class="bg-indigo-600 hover:bg-indigo-800  text-white font-bold py-2 px-4 rounded-2xl duration-300">Live Demo</button>

                                <button className={` rounded-2xl ${styles.uiBtn} gap-2`}>
                                    <svg fill="#FFF" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>Codigo</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </>
    );
};

export default Example;
