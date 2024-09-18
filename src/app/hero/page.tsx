import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative h-screen bg-cover bg-center text-white flex items-center justify-center" 
      style={{ backgroundImage: 'url(/hero.jpeg)', backgroundColor: '#36413E' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
       <div className="hidden md:block mt-8 animate__animated animate__fadeIn animate__delay-3s">
          <Image
            src="/texto.png"
            alt="Texto de bienvenida"
            width={400}
            height={400}
            className="mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      <div  className=" grid-cols-2 relative  z-10 text-center md:text-left px-4 md:px-8">

        <h2 className="text-5xl font-bold mb-4 text-[#758E4F] leading-tight animate__animated animate__fadeIn animate__delay-1s">
          Bienvenido  <span className='text-[#FCFDAF]'>a</span><br />
         <span className='text-[#FCFDAF]'>El</span> <span className='text-[#FCFDAF]'>Rincon </span> <span>del</span> <span className='text-[#758E4F]'>grano</span>
        </h2>

        <p className="text-xl mb-6 text-[#EFE9F4] animate__animated animate__fadeIn animate__delay-2s">Disfruta de una experiencia culinaria única con los mejores granos de café y platos deliciosos.</p>
        <a 
          href="#reservations" 
          className="bg-[#758E4F] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#6d7a55] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Haz tu Reserva
        </a>
       
      </div>
    </section>
  );
}
