export default function Header() {
    return (
      <header className="bg-[#36413E] text-[#FCFDAF] py-4 shadow-md">
        <nav className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-3xl font-bold">El Rincón del Grano</a>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-[#758E4F] transition-colors duration-300">Inicio</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#758E4F] transition-colors duration-300">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#758E4F] transition-colors duration-300">Menú</a>
            </li>
            <li>
              <a href="#reservations" className="hover:text-[#758E4F] transition-colors duration-300">Reservas</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#758E4F] transition-colors duration-300">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  