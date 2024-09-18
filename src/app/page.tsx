import Header from './header/page';
import Hero from './hero/page';
import About from './about/page';
import Reservations from './reservas/page';
import Contact from './contacto/page';
import Footer from './footer/page';
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  );
}
