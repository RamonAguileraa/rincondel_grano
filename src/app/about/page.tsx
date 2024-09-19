import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  return (
    <section id="about" className="relative py-16 bg-[#fff7f7] overflow-hidden">
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
          <h2 className="text-4xl italic font-serif mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-1s">Sobre Nosotros</h2>   <hr className="my-8 border-t-2 border-black opacity-50" />
          <p className="text-xl font-serif mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-2s">
          El Rincón del Grano es un lugar acogedor donde puedes disfrutar de momentos especiales en compañía de tus seres queridos, ya sea con tu pareja, amigos, familiares o incluso solo. Nos dedicamos a crear experiencias únicas con nuestras bebidas y platillos, cuidadosamente seleccionados para satisfacer todos los gustos. Más que un café, somos un espacio cultural donde siempre hay algo nuevo por descubrir: desde exposiciones de arte local hasta bazares, proyecciones de películas, música en vivo y actividades que resaltan la cultura de la región.
          Creemos en ofrecer un ambiente cálido y amigable, ideal para compartir conversaciones, celebrar momentos importantes o simplemente relajarte mientras disfrutas de un excelente café.
          </p>  <hr className="my-8 border-t-2 border-black opacity-50" />
          <p className='font-bold'>#PETFRIENDLY</p>  
          <p className="font-serif text-xl mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-2s">
          En El Rincón del Grano, sabemos lo importante que son tus mascotas, y por eso, siempre son bienvenidas en nuestro café. Somos un lugar donde los amantes de los animales pueden venir a disfrutar de un buen café mientras pasean o conviven con sus compañeros peludos.
Siempre estamos evolucionando, buscando nuevas formas de mejorar la experiencia de nuestros clientes y mantenernos como el café favorito de la comunidad. ¡Te esperamos con los brazos abiertos para que vivas una experiencia única!
</p>
        </div>
        <div className="md:w-1/2 ml-80 animate__animated animate__fadeIn animate__delay-3s">
          <Image
            src="/cafe.png"
            alt="Nuestro Café"
            width={800}
            height={600}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
