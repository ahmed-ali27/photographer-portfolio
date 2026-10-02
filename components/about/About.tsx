"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 sm:px-12 md:px-16 pt-4 pb-16 md:py-24 overflow-hidden text-neutral-900 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: 180, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
            <Image
              src="/about.jpeg"
              alt="عن المصور - ورا العدسة"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* 2. قسم النصوص: ييجي من الشمال ومن بعيد (Scale 0.6 -> 1) */}
        <motion.div
          initial={{ opacity: 0, x: -180, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-right"
        >
          {/* عنوان فرعي بسيط يضيف فخامة للـ UI */}
          <span className="text-xs md:text-sm tracking-widest text-neutral-400 font-medium uppercase">
            عن المصور
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            ورا العدسة
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            انا دكتور هندسه , اشتغلت في تيم الميديا شركه Career 180 ,صورت ايفينت
            Egypt Career sumit,التصوير بالنسبة لي مش مجرد صورة حلوة، لكنه طريقة
            إني أحفظ لحظة بكل تفاصيلها وإحساسها. بحب أركز على اللحظات العفوية
            والتفاصيل الصغيرة اللي أحيانًا بتكون هي أكتر حاجة بتفرق في الصورة.
            بصوّر حفلات ومناسبات، أشخاص وكابلز، أماكن وبراندات، ودايمًا بحاول
            أخلي كل جلسة ليها طابعها الخاص من غير ما أفقد طبيعة اللحظة. هدفي في
            النهاية إن الصورة لما تشوفها بعد فترة، ترجعلك نفس المشاعر اللي كنت
            عايشها وقتها.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
