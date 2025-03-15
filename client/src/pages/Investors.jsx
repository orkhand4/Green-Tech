import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Investors = () => {
  return (
    <div>
      <Header />
      <section className="my-25 py-16 bg-green-100 text-gray-900 text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-green-700">İnvestorlar üçün İmkanlar</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            GreenTech ekoloji layihələrə investisiya etmək istəyənlər üçün unikal imkanlar təqdim edir. Aşağıda ekoloji texnologiyalar sahəsində investisiya imkanlarını araşdıra bilərsiniz.
          </p>
        </div>
      </section>
      
      {/* İnvestor Xüsusiyyətləri */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-gray-50 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-700">Geniş Startap Şəbəkəsi</h3>
            <p className="mt-2 text-gray-600">Ekoloji innovasiya sahəsində perspektivli startaplara çıxış imkanı əldə edin.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-700">Sabit Gəlir Perspektivi</h3>
            <p className="mt-2 text-gray-600">Bərpa olunan enerji və yaşıl texnologiyalar sektorunda gəlirli investisiya fürsətləri.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-green-700">Ekoloji Məsuliyyət</h3>
            <p className="mt-2 text-gray-600">Daha yaşıl gələcək üçün dayanıqlı və ekoloji layihələrə yatırım edin.</p>
          </div>
        </div>
      </section>
      
      {/* Yeni Bölmə - Uğurlu İnvestisiya Hekayələri */}
      <section className="py-16 bg-gray-100 text-gray-900 text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-green-700">Uğurlu İnvestisiya Hekayələri</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            GreenTech platformasında uğur qazanan investisiya layihələrindən bəzilərini kəşf edin.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-green-700">EcoFuture Energy</h3>
              <p className="mt-2 text-gray-600">Bu layihə bərpa olunan enerji sahəsində böyük uğur qazandı və 3 milyon dollar investisiya aldı.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-green-700">GreenTech Innovations</h3>
              <p className="mt-2 text-gray-600">Ekoloji texnologiyalar sahəsində aparıcı startaplardan biri, dayanıqlı həllər təqdim edir.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* İnvestorlar üçün Əlaqə Bölməsi */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold">Siz də GreenTech investorlarına qoşulmaq istəyirsiniz?</h2>
          <p className="mt-4 text-lg text-gray-200">Bizimlə əlaqə saxlayaraq ekoloji layihələrə yatırım imkanları haqqında ətraflı məlumat əldə edə bilərsiniz.</p>
          <a href="#" className="mt-6 inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition">Bizimlə Əlaqə</a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Investors;