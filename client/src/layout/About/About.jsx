import React from 'react'

import programmer from '../../assets/img/programmer.jpg'

const About = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div className="sm:flex w-[80%] gap-40 ">
  <div className="sm:w-1/2 p-10 ">
    <div className="image object-center text-center">
      <img src={programmer} />
    </div>
  </div>
  <div className="sm:w-1/2 p-5 flex">
    <div className="text">
      <h2 className="my-4 font-bold text-2xl  sm:text-4xl ">
        Acerca de <span className="text-indigo-600">Israel Pinto</span>
      </h2>
      <p className="text-gray-700 leading-loose">
        Desarrollador autodidacta que se ha desempeñado en varios trabajos con el rol de desarrollador FrontEnd, el cual ha realizado multiples cursos en udemy y platzi, con una practica constante diaria y exhaustiva sobre el desarrollo web, buscando siempre cumplir con las necesidades del cliente. <br></br>Estudiante de la carrera Administraciòn mención informàtica del instituto universitario de tecnologia elias calixto pompa.<br></br>Becado por su buen rendimiento en un diplomado de IA y robotica, el cual se encuentra actualmente cursando.<br></br>Teorico de personalidad sencilla, analitico y detallista.<br></br>Aspirante a ser ingeniero informàtico.
      </p>
    </div>
  </div>
</div>
</div>


</>
  )
}

export default About