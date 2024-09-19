'use client'

import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Reservations() {
  const images = [
    '/restaurante.jpg',
    '/cafec2.jpg',
    '/cafec3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="reservations"
      className="relative py-16 text-center overflow-hidden bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
        <div className="absolute inset-0 bg-black opacity-45"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl italic font-serif font-bold mb-6 text-[#ffffff] animate__animated animate__fadeIn animate__delay-1s">
          Haz tu Reserva
        </h2>
        <p className="text-xl mb-6 text-[#ffff] font-serif animate__animated animate__fadeIn animate__delay-2s">
          Reserva tu mesa en línea fácilmente usando nuestro formulario de reservas.
        </p>
        <form
          action="/api/reservation"
          method="post"
          className="max-w-lg mx-auto bg-[#f1e1aa] p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
        >
          <label htmlFor="name" className="block text-lg mb-2 text-[#36413E]">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mb-4 border border-[#36413E] rounded-lg focus:ring-2 focus:ring-[#758E4F] transition-all duration-300"
            required
          />
          <label htmlFor="email" className="block text-lg mb-2 text-[#36413E]">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mb-4 border border-[#36413E] rounded-lg focus:ring-2 focus:ring-[#758E4F] transition-all duration-300"
            required
          />
          <label htmlFor="date" className="block text-lg mb-2 text-[#36413E]">
            Fecha y Hora:
          </label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            className="w-full p-3 mb-4 border border-[#36413E] rounded-lg focus:ring-2 focus:ring-[#758E4F] transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="bg-[#758E4F] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#6d7a55] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Enviar Reserva
          </button>
        </form>
      </div>
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
}
