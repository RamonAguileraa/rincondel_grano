'use client';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  const images = [
    '/pet2.png', 
    '/pet1.png',
    '/cafe.png', 
    '/cafe2.png',
    '/cafe3.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="relative py-16 bg-[#fff7f7] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left relative z-10">
        <div className="md:w-1/2 px-4">
          <h2 className="text-4xl italic font-serif mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-1s">
            Sobre Nosotros
          </h2>
          <hr className="my-8 border-t-2 border-black opacity-50" />
          <p className="text-xl font-serif mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-2s">
          El Rincón del Grano es un lugar acogedor donde puedes disfrutar de momentos especiales en compañía de tus seres queridos, ya sea con tu pareja, amigos, familiares o incluso solo. Nos dedicamos a crear experiencias únicas con nuestras bebidas y platillos, cuidadosamente seleccionados para satisfacer todos los gustos. Más que un café, somos un espacio cultural donde siempre hay algo nuevo por descubrir: desde exposiciones de arte local hasta bazares, proyecciones de películas, música en vivo y actividades que resaltan la cultura de la región.
          Creemos en ofrecer un ambiente cálido y amigable, ideal para compartir conversaciones, celebrar momentos importantes o simplemente relajarte mientras disfrutas de un excelente café.                  </p>
          <hr className="my-8 border-t-2 border-black opacity-50" />
          <p className='font-bold text-xl'>#PETFRIENDLY</p>  
          <p className="font-serif text-xl mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-2s">
          En El Rincón del Grano, sabemos lo importante que son tus mascotas, y por eso, siempre son bienvenidas en nuestro café. Somos un lugar donde los amantes de los animales pueden venir a disfrutar de un buen café mientras pasean o conviven con sus compañeros peludos.
          Siempre estamos evolucionando, buscando nuevas formas de mejorar la experiencia de nuestros clientes y mantenernos como el café favorito de la comunidad. ¡Te esperamos con los brazos abiertos para que vivas una experiencia única!               </p>
        </div>
        <div className="md:w-1/2 relative animate__animated animate__fadeIn animate__delay-3s">
          <div className="relative w-full md:ml-20 h-[300px] md:h-[500px] lg:h-[700px]">
            <img
              src={images[currentImage]}
              alt="Nuestro Café"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
