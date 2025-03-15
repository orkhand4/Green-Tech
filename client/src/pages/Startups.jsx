import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Startups = () => {
  return (
    <div>
      <Header />

      <section className="my-25 py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-green-400">Ekoloji Startaplar</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          GreenTech platformasında ekoloji yönümlü startaplar üçün mükəmməl
            imkanlar mövcuddur. Aşağıda ən perspektivli startaplardan bəzilərini
            tapa bilərsiniz!
          </p>
        </div>
      </section>


      <section className="mt-25 py-16 bg-gray-100 text-gray-900 text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Startap Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <img
                src="src/assets/startup1.avif"
                alt="Startup 1"
                className="h-40 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mt-4">
                EcoPower Solutions
              </h3>
              <p className="text-gray-600 mt-2">
                Yenilənə bilən enerji həlləri təqdim edən innovativ startap.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-600 font-semibold hover:underline"
              >
                Ətraflı
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <img
                src="src/assets/startup2.jpeg"
                alt="Startup 2"
                className="h-40 w-full object-contain"
              />
              <h3 className="text-2xl font-semibold mt-4">
                GreenBuild Technologies
              </h3>
              <p className="text-gray-600 mt-2">
                Ekoloji tikinti materialları istehsal edən şirkət.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-600 font-semibold hover:underline"
              >
                Ətraflı
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <img
                src="src/assets/startup3.svg"
                alt="Startup 3"
                className="h-40 w-full object-contain"
              />
              <h3 className="text-2xl font-semibold mt-4">AquaPure Systems</h3>
              <p className="text-gray-600 mt-2">
                İçməli suyun təmizlənməsi üçün ağıllı texnologiyalar.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-green-600 font-semibold hover:underline"
              >
                Ətraflı
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Startups;
