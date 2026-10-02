import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 border-t border-neutral-800 dir-rtl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* حقوق الملكية واسم المطور */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-sm font-medium text-neutral-200">
            Created with by{" "}
            <span className="text-gray-300 font-bold tracking-wide">
              Eng: Ahmed Ali
            </span>
          </p>
          <p className="text-xs text-neutral-500">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* أيقونات التواصل الاجتماعي والمشاريع */}
        <div className="flex items-center gap-5">
          {/* واتساب المباشر */}
          <a
            href="https://wa.me/201022016305?text=أهلاً%20مهندس%20أحمد،%20حابب%20أستفسر%20عن%20تطوير%20موقع"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-emerald-500 hover:scale-110 transition-all shadow-md"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>

          {/* فيسبوك المباشر */}
          <a
            href="https://www.facebook.com/share/1BAR1pJwQ8/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-blue-500 hover:scale-110 transition-all shadow-md"
          >
            <FaFacebook className="w-5 h-5" />
          </a>

          {/* إنستجرام المباشر */}
          <a
            href="https://www.instagram.com/a7meed_3liiii"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-pink-500 hover:scale-110 transition-all shadow-md"
          >
            <FaInstagram className="w-5 h-5" />
          </a>

          {/* جيت هاب */}
          <a
            href="https://github.com/ahmed-ali27"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-white hover:scale-110 transition-all shadow-md"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}