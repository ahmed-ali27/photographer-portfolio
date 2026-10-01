export default function Packags() {
  const packages = [
    {
      title: "PACKAGE 1",
      price: "2,500 LE",
      details: "تصوير سيشن فقط فرح أو خطوبة",
      badge: "Standard",
    },
    {
      title: "PACKAGE 2",
      price: "3,000 LE",
      details: "تصوير سيشن + ألبوم 45×30 + تابلوه خشب 50×60",
      badge: "Popular",
    },
    {
      title: "BRONZE",
      price: "4,500 LE",
      details: "تصوير سيشن + قاعة + ألبوم 30×40 + تابلوه خشب 40×50 + فلاشة هدية",
      badge: "Best Value",
    },
    {
      title: "GOLDEN",
      price: "5,500 LE",
      details:
        "تصوير سيشن + قاعة + فيرست لوك + تجهيزات + ألبوم 30×80 + تابلوه 70×50 + تابلوه 40×50 + فلاشة هدية",
      badge: "VIP",
    },
  ];

  const addOns = [
    { price: "4,000 LE", text: "برومو فيديو سيشن + قاعة" },
    { price: "1,000 LE", text: "تصوير سيشن كاجوال" },
    { price: "1,000 LE", text: "إضافة مصور آخر داخل القاعة بنفس الفرح" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto dir-rtl">
      {/* 1. كروت الباقات الرئيسية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="group relative bg-neutral-900/90 text-white p-7 rounded-3xl border border-neutral-800 shadow-2xl hover:border-neutral-500 hover:shadow-white/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  {pkg.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <h2 className="text-xl font-bold text-center tracking-wider text-neutral-100 mb-2">
                {pkg.title}
              </h2>
              <div className="text-2xl font-black text-center  mb-6 border-b border-neutral-800 pb-4">
                {pkg.price}
              </div>
              <p className="text-sm text-neutral-300 text-center leading-relaxed">
                {pkg.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 2. بوكس الإضافات في المنتصف */}
      <div className="flex justify-center mb-12">
        <div className="w-full max-w-2xl bg-neutral-900 text-white p-8 rounded-3xl border border-neutral-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-6  border-b border-neutral-800 pb-3">
            الإضافات
          </h2>
          <div className="space-y-4">
            {addOns.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-neutral-950/60 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-colors"
              >
                <span className="text-sm font-medium text-neutral-200">
                  {item.text}
                </span>
                <span className="text-base font-bold  dir-ltr">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. تنويه هام ببوردر dashed وظل شادو */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-neutral-900/40 text-neutral-300 p-6 rounded-2xl border border-dashed border-neutral-600 shadow-xl shadow-black/40 text-center space-y-2">
          <p className="text-sm font-semibold">
            📌 تنويه هام: الاستلام بعد مدة من 25 إلى 35 يوم من تاريخ المناسبة.
          </p>
          <p className="text-xs ">
            💡 ملحوظة: يوجد تغطية ستوريز وريلز بالموبايل بناءً على طلب العميل.
          </p>
        </div>
      </div>
    </section>
  );
}