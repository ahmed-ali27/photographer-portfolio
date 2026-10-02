import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="pt-8 pb-12 ">
      <div className="flex gap-5 items-center justify-center">
        <h1>
            للتواصل والاستفسار 
        </h1>
        {/* واتساب مع رسالة جاهزة */}
        <a
          href="https://wa.me/201025280687?text=أهلاً%20عايز%20أستفسر%20عن%20الباكيدجات"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="w-6 h-6 text-emerald-600 hover:scale-110 transition-transform cursor-pointer" />
        </a>

        {/* ماسينجر فيسبوك */}
        <a href="https://m.me/handasweddings" target="_blank" rel="noreferrer">
          <FaFacebook className="w-6 h-6 text-blue-600 hover:scale-110 transition-transform cursor-pointer" />
        </a>

        {/* ديركت إنستجرام */}
        <a
          href="https://ig.me/m/handas_weddings"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="w-6 h-6 text-pink-600 hover:scale-110 transition-transform cursor-pointer" />
        </a>
      </div>
    </section>
  );
}


