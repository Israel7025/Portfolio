import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 px-16 font-sans tracking-wide">
            <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
                <div className="flex gap-x-5">
                    <p className="text-[15px] leading-loose">Hecho por Israel Pinto con React y Tailwind.</p>
                    <svg width={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 228">
                        <path
                            fill="#00D8FF"
                            d="M210 74a171 171 0 0 0-8-3l2-5c6-31 2-55-12-63s-35 0-58 19a171 171 0 0 0-6 6 156 156 0 0 0-4-4C101 4 78-5 64 3S46 34 52 63a171 171 0 0 0 2 8l-10 3C17 83 0 98 0 114s19 31 47 41a146 146 0 0 0 7 2 167 167 0 0 0-2 9c-6 29-1 51 12 59 14 8 37-1 59-20a146 146 0 0 0 5-5 168 168 0 0 0 7 6c22 19 44 26 57 19 14-8 18-32 12-61a145 145 0 0 0-1-7l5-2c29-10 48-25 48-41s-18-31-46-40Zm-6 71-4 1-13-32 12-32 8 2c24 8 38 20 38 30s-16 22-41 31Zm-10 21c2 13 3 24 1 33s-5 14-9 16c-8 5-25-1-43-17a157 157 0 0 1-7-6l22-27c12-1 24-3 34-6a134 134 0 0 1 2 7ZM87 215c-8 2-14 2-18 0-8-4-11-22-7-47a157 157 0 0 1 2-8l35 5c7 10 14 19 22 27a135 135 0 0 1-5 5c-10 8-20 14-29 18Zm-37-70c-12-5-22-10-30-16-6-6-9-11-9-15 0-10 14-22 37-30l9-2 12 32-12 33a135 135 0 0 1-7-2Zm13-85c-5-24-2-43 6-47 9-5 28 2 48 20a144 144 0 0 1 3 3L99 63l-35 5a160 160 0 0 1-1-8Zm110 28a348 348 0 0 0-8-13l24 4-8 22a381 381 0 0 0-8-13Zm-45-44 15 18a322 322 0 0 0-30 0l15-18ZM83 88a323 323 0 0 0-7 13c-4-7-6-15-9-22l24-4a322 322 0 0 0-8 13Zm8 65-24-4 9-22a321 321 0 0 0 7 13l8 13Zm37 31-15-18a383 383 0 0 0 30 0l-15 18Zm53-58 8 23-24 4a382 382 0 0 0 8-13 347 347 0 0 0 8-14Zm-17 8a359 359 0 0 1-13 20 329 329 0 0 1-23 1l-23-1a310 310 0 0 1-13-19 307 307 0 0 1-11-21 310 310 0 0 1 11-21 307 307 0 0 1 13-19l23-1 23 1a329 329 0 0 1 13 19 358 358 0 0 1 11 21 329 329 0 0 1-11 20Zm22-122c9 5 12 25 7 51l-1 5-35-5-21-27a161 161 0 0 1 6-5c19-17 36-23 44-19Zm-58 79a23 23 0 1 1 0 46 23 23 0 0 1 0-46Z"
                        />
                    </svg>
                </div>
                <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
                    <li>
                        <a href="javascript:void(0)" className="text-[15px] hover:text-white">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[15px] hover:text-white">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[15px] hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;