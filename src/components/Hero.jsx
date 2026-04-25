const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C47B5D] text-sm tracking-wide mb-4">HANDMADE TEXTILES</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-stone-800 leading-tight mb-6">
            Текстиль, <br />созданный <span className="font-medium">для жизни</span>
          </h1>
          <p className="text-stone-500 text-lg mb-8 max-w-md">
            Ковры, панно, подушки и пледы ручной работы. Только натуральные материалы.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-stone-800 text-white px-8 py-3 text-sm hover:bg-[#C47B5D] transition">
              Смотреть коллекцию
            </button>
            <button className="border border-stone-300 px-8 py-3 text-sm hover:border-[#C47B5D] hover:text-[#C47B5D] transition">
              О производстве
            </button>
          </div>
          <div className="flex gap-8 mt-12">
            <div><div className="text-2xl font-light text-[#C47B5D]">8+</div><div className="text-xs text-stone-400">лет опыта</div></div>
            <div><div className="text-2xl font-light text-[#C47B5D]">100%</div><div className="text-xs text-stone-400">ручная работа</div></div>
            <div><div className="text-2xl font-light text-[#C47B5D]">500+</div><div className="text-xs text-stone-400">изделий в год</div></div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700" alt="ковер" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;