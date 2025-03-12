import Footer from "../components/Footer";
import Header from "../components/Header";

const LearnMore = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-green-100 text-gray-900 p-6">
      <h1 className="text-4xl text-green-900 md:text-5xl font-bold">GreenTech Nədir?</h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        GreenTech ekoloji startapları dəstəkləyən bir platformadır. Burada siz innovativ texnologiyalar və yaşıl gələcək haqqında daha çox məlumat əldə edə bilərsiniz.
      </p>
      
      {/* Əlavə Məlumat Bölməsi */}
      <div className="mt-8 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold text-green-700">Biz Kimik?</h2>
        <p className="mt-2 text-lg">
          GreenTech ekoloji problemlərə texnoloji həllər təqdim edən startaplar üçün bir platformadır. Biz innovasiyanı və dayanıqlı inkişafı dəstəkləyirik.
        </p>
      
        <h2 className="text-2xl font-semibold text-green-700 mt-6">Niyə GreenTech?</h2>
        <ul className="mt-2 list-disc list-inside text-lg">
          <li>Startaplar üçün dəstək və mentorluq</li>
          <li>İnvestorlarla əlaqə imkanı</li>
          <li>Ekoloji texnologiyalara yönəlmiş innovativ həllər</li>
          <li>Tədbirlər və seminarlarla inkişaf imkanı</li>
        </ul>
      </div>
      
      <a href="/" className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition">
        Ana Səhifəyə Qayıt
      </a>
    </div>
    <Footer/>
    </>
  );
};

export default LearnMore;
