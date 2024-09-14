import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  return (
    <section id="about" className="relative py-16 bg-[#EFE9F4] overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
        <i className="fas fa-coffee text-[#36413E] text-6xl opacity-20 absolute top-10 left-10"></i>
        <i className="fas fa-cup text-[#758E4F] text-5xl opacity-20 absolute bottom-10 right-10"></i>
        <i className="fas fa-bean text-[#FCFDAF] text-4xl opacity-20 absolute top-1/4 left-1/4"></i>
        <i className="fas fa-mug-hot text-[#3D0814] text-6xl opacity-20 absolute bottom-1/4 right-1/4"></i>
        <i className="fas fa-seedling text-[#758E4F] text-5xl opacity-20 absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"></i>
        <i className="fas fa-grain text-[#FCFDAF] text-4xl opacity-20 absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2"></i>
        <i className="fas fa-utensils text-[#3D0814] text-5xl opacity-20 absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
        <i className="fas fa-blender text-[#36413E] text-4xl opacity-20 absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2"></i>
        <i className="fas fa-cocktail text-[#758E4F] text-5xl opacity-20 absolute bottom-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></i>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left relative z-10">
        <div className="md:w-1/2 px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-1s">Sobre Nosotros</h2>
          <p className="text-xl mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-2s">
            En El Rincón del Grano, te ofrecemos una experiencia única con nuestro café de alta calidad y una selección de platos que complementan perfectamente nuestro menú. Nuestro ambiente acogedor y nuestro servicio amigable te harán sentir como en casa.
          </p>
        </div>
        <div className="md:w-1/2 px-4 animate__animated animate__fadeIn animate__delay-3s">
          <Image
            src="/restaurante.jpg"
            alt="Nuestro Café"
            width={600}
            height={400}
            objectFit="cover"
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
