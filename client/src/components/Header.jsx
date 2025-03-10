import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex justify-between items-center">
          {/* Loqo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/src/assets/greentechno.svg" alt="EcoTech" className="h-14 md:h-20 object-cover" />
            </Link>
          </div>

          {/* Naviqasiya menyusu */}
          <nav className={`hidden lg:flex space-x-8 text-lg ${mobileMenuOpen ? "block" : ""}`}>
            <ul className="flex gap-6">
              <li><Link to="/startups" className="text-gray-700 hover:text-green-600 transition">Startaplar</Link></li>
              <li><Link to="/investors" className="text-gray-700 hover:text-green-600 transition">İnvestorlar</Link></li>
              <li><Link to="/events" className="text-gray-700 hover:text-green-600 transition">Tədbirlər</Link></li>
              <li><Link to="/resources" className="text-gray-700 hover:text-green-600 transition">Resurslar</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-green-600 transition">Haqqımızda</Link></li>
            </ul>
          </nav>

          {/* Giriş və qeydiyyat düymələri */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+994123456789" className="text-green-600 font-bold text-lg">+994 12 345 67 90</a>
            <Link to="/register" className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">Qeydiyyat</Link>
            <Link to="/login" className="border border-green-600 text-green-600 px-5 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">Daxil ol</Link>
          </div>

          {/* Mobil menyu düyməsi */}
          <button
            className="lg:hidden flex flex-col space-y-1 w-8 h-8 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-8 h-1 bg-gray-700 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-8 h-1 bg-gray-700 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-1 bg-gray-700 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

          {/* Mobil menyu (açılan) */}
          <nav className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 text-xl transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
            <ul className="flex flex-col space-y-6 text-center">
              <li><Link to="/startups" className="text-gray-700 hover:text-green-600 transition">Startaplar</Link></li>
              <li><Link to="/investors" className="text-gray-700 hover:text-green-600 transition">İnvestorlar</Link></li>
              <li><Link to="/events" className="text-gray-700 hover:text-green-600 transition">Tədbirlər</Link></li>
              <li><Link to="/resources" className="text-gray-700 hover:text-green-600 transition">Resurslar</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-green-600 transition">Haqqımızda</Link></li>
            </ul>

            {/* Bağlama düyməsi */}
            <button className="text-gray-600 text-3xl absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}>×</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
