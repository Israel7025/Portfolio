import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./layout/Header/Header.jsx";
import About from "./layout/About/About.jsx";
import Wrapper from "./layout/Wrapper.jsx"
import Proyects from "./layout/Proyects/Proyects.jsx";
import Example from "./layout/Example.jsx";
import Contact from "./layout/Contact/Contact.jsx";
import Footer from "./layout/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Wrapper>
            <Header />
            <About />
            <Proyects />
        </Wrapper>
        <Example />
        <Wrapper>
            <Contact />
        </Wrapper>
        <Footer />
    </StrictMode>
);
