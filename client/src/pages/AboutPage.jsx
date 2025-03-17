import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <section className="mt-25 relative bg-green-100 py-16 text-gray-900 text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-green-700">Biz Kimik?</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            GreenTech ekoloji texnologiyalar sahəsində innovativ həllər təqdim
            edən bir platformadır. Biz texnologiyanın gücündən istifadə edərək
            planetimizi qorumaq və dayanıqlı gələcək yaratmaq üçün çalışırıq.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-green-700">Komandamız</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img
                src="src/assets/team-member1.png"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Elvin Məmmədov</h3>
              <p className="text-gray-600">CEO & Təsisçi</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img
                src="src/assets/team-member-3.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Leyla Hüseynova</h3>
              <p className="text-gray-600">Marketinq Direktoru</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <img
                src="src/assets/team-member-2.jpg"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">Murad Əliyev</h3>
              <p className="text-gray-600">Texnologiya Direktoru</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-gray-900 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-700">Missiyamız</h2>
          <p className="mt-4 text-lg text-gray-700">
            Biz ekoloji problemlərə innovativ texnoloji həllər təqdim etməklə,
            dayanıqlı gələcək üçün çalışırıq. Məqsədimiz texnologiyanı
            ekosistemə uyğunlaşdırmaq və yaşıl dünya yaratmaqdır.
          </p>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold">Bizimlə Əlaqə</h2>
          <p className="mt-4 text-lg text-gray-200">
            GreenTech-in bir hissəsi olmaq və ekoloji texnologiyalar sahəsində
            bizə qoşulmaq üçün bizimlə əlaqə saxlayın.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Əlaqə Saxlayın
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
