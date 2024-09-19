import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#36413E] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl italic font-serif font-bold mb-6 text-[#FCFDAF] animate__animated animate__fadeIn animate__delay-1s">
            Contáctanos
          </h2>
          <p className="text-xl text-[#ffffff] font-serif mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.
          </p>
          <div className="text-[#ffffff] text-lg mb-6">
            <p className="mb-2">Teléfono: (+52) 614-228-3958</p>
            <p className="mb-2">Correo Electrónico: ramonaguileradve@gmail.com</p>
            <p>Dirección: Calle Ejemplo, 123, CHIHUAHUA</p>
          </div>
        </div>
        
        <div className="md:w-1/2 flex flex-col items-center md:items-end">
          <h3 className="text-[#ffffff] text-2xl font-bold mb-4">Síguenos</h3>
          <div className="flex flex-col items-center md:items-end">
            <a href="https://facebook.com" className="text-[#FCFDAF] hover:text-[#758E4F] mb-2 text-3xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" className="text-[#FCFDAF] hover:text-[#758E4F] mb-2 text-3xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="text-[#FCFDAF] hover:text-[#758E4F] mb-2 text-3xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-[#FCFDAF] hover:text-[#758E4F] text-3xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
