export default function Menu() {
    return (
      <section id="menu" className="bg-[#FCFDAF] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#36413E] animate__animated animate__fadeIn animate__delay-1s">Nuestro Menú</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Ejemplo de plato */}
            <div className="bg-[#EFE9F4] rounded-lg shadow-lg p-6 max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
              <h3 className="text-2xl font-bold mb-2 text-[#3D0814]">Café Especial</h3>
              <p className="text-lg text-[#36413E] mb-4">Un café suave y aromático, preparado con granos seleccionados.</p>
              <p className="text-xl font-bold text-[#3D0814]">$5.00</p>
            </div>
            <div className="bg-[#EFE9F4] rounded-lg shadow-lg p-6 max-w-xs transition-transform transform hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-2xl font-bold mb-2 text-[#3D0814]">Pastel de Chocolate</h3>
              <p className="text-lg text-[#36413E] mb-4">Delicioso pastel de chocolate, perfecto para acompañar con café.</p>
              <p className="text-xl font-bold text-[#3D0814]">$6.00</p>
            </div>
            {/* Añadir más platos aquí */}
          </div>
        </div>
      </section>
    );
  }
  