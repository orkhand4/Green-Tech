import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-green-100 text-green-900">
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Daha Yaşıl Gələcək üçün Texnologiya
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          GreenTech ekoloji startaplar və innovativ texnologiyalar üçün platformadır. Biz birlikdə dünyanı daha yaşıl edə bilərik!
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <Link to="/startups" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-700 transition">
            Startapını Yarat
          </Link>
          <Link to="/learn-more" className="bg-transparent border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition">
            Daha Çox Öyrən
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;