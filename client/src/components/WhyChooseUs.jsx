const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900 text-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-green-700">Niyə Bizi Seçməlisiniz?</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          GreenTech ekoloji texnologiyalara yönəlmiş startaplar üçün mükəmməl bir platformadır. İnnovativ həllər və dayanıqlı inkişaf üçün bizə qoşulun!
        </p>

        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
          <img src="src/assets/innovation.png" alt="Innovation" className="h-16 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">İnnovasiya</h3>
            <p className="text-gray-600 mt-2">Ən son texnologiyalar və yeniliklər vasitəsilə ekoloji problemlərə həllər təqdim edirik.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
          <img src="src/assets/networkk.png" alt="Network" className="h-16 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Geniş Şəbəkə</h3>
            <p className="text-gray-600 mt-2">İnvestorlar, startapçılar və ekoloji mütəxəssislərlə bir araya gəlmək fürsətiniz var.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2">
          <img src="src/assets/sustainability1721.jpg" alt="Sustainability" className="h-16 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Dayanıqlı Gələcək</h3>
            <p className="text-gray-600 mt-2">Ekoloji davamlılıq prinsipləri əsasında texnologiya inkişaf etdiririk.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;