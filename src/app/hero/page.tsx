import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: 'url(/hero.jpeg)', backgroundColor: '#36413E' }}
    >
      {/* Fondo opaco negro */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Contenido del texto e imagen en dos columnas */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8">

        {/* Contenedor de texto alineado a la izquierda */}
        <div className="text-left md:w-1/2">
          <h2 className="text-5xl font-bold mb-4  leading-tight animate__animated animate__fadeIn animate__delay-1s">
            Bienvenido <span className='text-[#FCFDAF]'>a</span><br />
            <span className='text-[#FCFDAF]'>El</span> <span className='text-[#FCFDAF]'>Rincon</span> <span>del</span> <span className='italic font-serif text-[#758E4F]'>grano</span>
          </h2>

          <p className="text-xl mb-6 text-[#EFE9F4] animate__animated animate__fadeIn animate__delay-2s">
            Disfruta de una experiencia culinaria única con los mejores granos de café y platos deliciosos.
          </p>

          <a
            href="#reservations"
            className="bg-[#758E4F] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#6d7a55] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Haz tu Reserva
          </a>
        </div>

        {/* Imagen más grande y alineada a la derecha */}
        <div className=" md:w-5/12 animate__animated animate__fadeIn animate__delay-3s">
          <Image
            src="/texto.png"
            alt="Texto de bienvenida"
            width={500}
            height={500}
            className="mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
