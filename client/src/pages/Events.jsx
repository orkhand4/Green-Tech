import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <div>
      <Header />
      <section className="my-25 py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-green-400">Gələcək Tədbirlər</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            GreenTech platforması ekoloji texnologiyalar sahəsində ən son yenilikləri öyrənmək üçün müxtəlif tədbirlər təşkil edir. Aşağıdakı tədbirlərə qoşulun və innovasiyalara qatılın!
          </p>
        </div>
      </section>
      
      {/* Tədbir Bannerləri */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="src/assets/event1.webp" alt="Event 1" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
              <h3 className="text-3xl font-bold">Yaşıl Enerji Sammiti</h3>
              <p className="mt-2">Bərpa olunan enerji və dayanıqlı inkişaf mövzusunda beynəlxalq tədbir.</p>
              <a href="#" className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Ətraflı</a>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="src/assets/event-2.jpg" alt="Event 2" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
              <h3 className="text-3xl font-bold">Eko Startap Forum</h3>
              <p className="mt-2">Ekoloji yönümlü startaplar üçün investisiya və mentorluq imkanları.</p>
              <a href="#" className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Ətraflı</a>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:col-span-2">
            <img src="src/assets/event-3.jpg" alt="Event 3" className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
              <h3 className="text-3xl font-bold">İnnovasiya və Texnologiya Günü</h3>
              <p className="mt-2">Ekoloji problemlərə texnoloji həllərin müzakirə olunduğu tədbir.</p>
              <a href="#" className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Ətraflı</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;