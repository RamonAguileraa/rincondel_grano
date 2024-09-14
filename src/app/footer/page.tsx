export default function Footer() {
    return (
      <footer className="bg-[#36413E] text-[#FCFDAF] py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">© {new Date().getFullYear()} El Rincón del Grano. Todos los derechos reservados.</p>
          <p className="text-sm">
            <a href="#privacy" className="hover:text-[#758E4F] transition-colors">Política de Privacidad</a> | 
            <a href="#terms" className="ml-4 hover:text-[#758E4F] transition-colors">Términos y Condiciones</a>
          </p>
        </div>
      </footer>
    );
  }
  