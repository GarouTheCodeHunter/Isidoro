import Button from '../components/ui/Button';
import heroImg from '../assets/hero.png';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Isidoro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Recursos</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sobre</a>
              <Button to="/dashboard" variant="primary" className="py-2 px-6">
                Ir para Dashboard
              </Button>
            </div>
            {/* Mobile Button Only */}
            <div className="md:hidden">
               <Button to="/dashboard" variant="primary" className="py-2 px-4 text-sm">
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                  Gerencie sua comunidade com <span className="text-blue-600">excelência.</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  O Projeto Isidoro oferece ferramentas completas para gestão de igrejas, usuários e formações. Simplifique a administração e foque no que realmente importa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button to="/dashboard" variant="primary" className="px-8 py-4 text-lg">
                    Começar agora
                  </Button>
                  <Button to="#features" variant="secondary" className="px-8 py-4 text-lg">
                    Saiba mais
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-blue-600/10 absolute -inset-4 rounded-3xl transform rotate-3 hidden sm:block"></div>
                <img 
                  src={heroImg} 
                  alt="Isidoro Dashboard" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Recursos Poderosos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo o que você precisa para uma gestão eficiente em um só lugar.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Gestão de Usuários",
                  desc: "Controle total sobre membros, cargos e permissões de acesso de forma intuitiva.",
                  icon: "👥"
                },
                {
                  title: "Administração de Igrejas",
                  desc: "Organize múltiplas sedes, congregações e departamentos centralizadamente.",
                  icon: "⛪"
                },
                {
                  title: "Formações e Aulas",
                  desc: "Gerencie o crescimento espiritual e acadêmico com módulos de formação integrados.",
                  icon: "📖"
                },
                {
                  title: "Calendário Integrado",
                  desc: "Nunca perca um evento importante com nosso sistema de agenda sincronizada.",
                  icon: "📅"
                }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Nossa Missão</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                O Projeto Isidoro nasceu da necessidade de modernizar a gestão eclesiástica, trazendo tecnologia de ponta para auxiliar líderes e comunidades em sua jornada de crescimento e organização.
              </p>
              <Button to="/dashboard" variant="primary" className="border-none bg-blue-600 hover:bg-blue-700">
                Explore o Dashboard
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-blue-600">Isidoro</span>
            <p className="text-gray-500 mt-2 text-sm">© 2026 Projeto Isidoro. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Termos</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
