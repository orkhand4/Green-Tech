import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-100 py-10">
      <div className="container mx-auto px-6 flex flex-row md:flex-row justify-between items-start md:items-start flex-wrap md:flex-nowrap">
        {/* Loqo və Qısa Məlumat */}
        <div className="flex gap-5 mb-6 md:mb-0 text-center md:text-left">
          <Link to="/">
            <img src="/src/assets/greentechno.svg" alt="GreenTech" className="h-12 w-30 md:h-28 mx-auto md:mx-0" />
          </Link>
          <p className=" max-w-sm">
            GreenTech ekoloji texnologiyalara və startaplara dəstək verən platformadır. Gəlin birlikdə dünyanı daha yaşıl edək!
          </p>
        </div>

        {/* Naviqasiya Linkləri */}
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <Link to="/startups" className="hover:text-green-300 transition">Startaplar</Link>
          <Link to="/investors" className="hover:text-green-300 transition">İnvestorlar</Link>
          <Link to="/events" className="hover:text-green-300 transition">Tədbirlər</Link>
          <Link to="/resources" className="hover:text-green-300 transition">Resurslar</Link>
          <Link to="/about" className="hover:text-green-300 transition">Haqqımızda</Link>
        </div>

        {/* Sosial Media İkonları */}
        <div className="mt-6 md:mt-0 flex space-x-4">
          <a href="#" className="text-green-300 hover:text-green-100 transition">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="text-green-300 hover:text-green-100 transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-green-300 hover:text-green-100 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-green-300 hover:text-green-100 transition">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 opacity-75">
        © {new Date().getFullYear()} GreenTech. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
};

export default Footer;
