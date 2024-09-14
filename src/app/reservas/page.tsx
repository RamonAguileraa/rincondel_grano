import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Reservations() {
  return (
    <section id="reservations" className="relative py-16 text-center bg-[#EFE9F4] overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
        <i className="fas fa-calendar-alt text-[#36413E] text-6xl opacity-20 absolute top-10 left-10"></i>
        <i className="fas fa-clock text-[#758E4F] text-5xl opacity-20 absolute bottom-10 right-10"></i>
        <i className="fas fa-user text-[#FCFDAF] text-4xl opacity-20 absolute top-1/4 left-1/4"></i>
        <i className="fas fa-phone text-[#3D0814] text-6xl opacity-20 absolute bottom-1/4 right-1/4"></i>
        <i className="fas fa-envelope text-[#758E4F] text-5xl opacity-20 absolute top-1/3 right-1/4"></i>
        <i className="fas fa-map-marker-alt text-[#FCFDAF] text-4xl opacity-20 absolute bottom-1/3 left-1/2 transform -translate-x-1/2"></i>
        <i className="fas fa-concierge-bell text-[#36413E] text-5xl opacity-20 absolute top-2/3 left-1/3 transform -translate-x-1/2"></i>
        <i className="fas fa-glass-martini-alt text-[#758E4F] text-4xl opacity-20 absolute top-1/2 right-1/3 transform -translate-x-1/2"></i>
      </div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-1s">Haz tu Reserva</h2>
        <p className="text-xl mb-6 text-[#36413E] animate__animated animate__fadeIn animate__delay-2s">Reserva tu mesa en línea fácilmente usando nuestro formulario de reservas.</p>
        <form action="/api/reservation" method="post" className="max-w-lg mx-auto bg-[#FCFDAF] p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          <label htmlFor="name" className="block text-lg mb-2 text-[#36413E]">Nombre:</label>
          <input type="text" id="name" name="name" className="w-full p-3 mb-4 border border-[#36413E] rounded-lg focus:ring-2 focus:ring-[#758E4F] transition-all duration-300" required />
          <label htmlFor="email" className="block text-lg mb-2 text-[#36413E]">Correo Electrónico:</label>
          <input type="email" id="email" name="email" className="w-full p-3 mb-4 border border-[#36413E] rounded-lg focus:ring-2 focus:ring-[#758E4F] transition-all duration-300" required />
          <label htmlFor="date" className="block text-lg mb-2 text-[#36413E]">Fecha y Hora:</label>
          <input type="datetime-local" id="date" name="date" className="w-full p-3 mb-4 border border-[#36413E] rounded-lg focus:ring-2 focus:ring-[#758E4F] transition-all duration-300" required />
          <button type="submit" className="bg-[#758E4F] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#6d7a55] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Enviar Reserva</button>
        </form>
      </div>
    </section>
  );
}
