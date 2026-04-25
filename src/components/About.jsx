const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal-left">
          <p className="text-[#C47B5D] text-sm tracking-wide mb-4">О НАС</p>
          <h2 className="text-4xl font-light text-stone-800 leading-tight mb-6">
            Ремесло, <br />передающее <span className="font-medium">тепло</span>
          </h2>
          <p className="text-stone-500 mb-6 leading-relaxed">
            Мы создаём текстиль, который становится частью дома. Не просто вещь — атмосфера, тепло, история.
            Каждое изделие рождается вручную, без станков и конвейеров.
          </p>
          <p className="text-stone-500 mb-8 leading-relaxed">
            Натуральные материалы — хлопок, лён, шерсть. Только они способны передать ту самую текстуру,
            которая делает интерьер живым.
          </p>
          <div className="flex items-center gap-2 text-sm text-stone-400">
            <span className="w-8 h-px bg-[#C47B5D]"></span> 
            <span>с 2015 года</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 reveal-right">
          <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400" className="w-full aspect-square object-cover" />
          <img src="https://i.pinimg.com/736x/fc/27/13/fc2713b97d6a2750bb0d0a40f1afa903.jpg" className="w-full aspect-square object-cover mt-8" />
          <img src="https://i.pinimg.com/736x/ab/60/d0/ab60d0cadf6283405310d8471ca834f8.jpg" className="w-full aspect-square object-cover -mt-8" />
          <img src="https://i.pinimg.com/originals/13/4e/d6/134ed611ccdfd7bc74285c88111c3026.jpg" className="w-full aspect-square object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;