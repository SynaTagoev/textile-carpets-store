import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="reveal">
          <p className="text-white text-xl font-light mb-4">WEAVE<span className="text-[#C47B5D]">&CO</span></p>
          <p className="text-sm leading-relaxed">Ручной текстиль, создающий уют.</p>
        </div>
        <div className="reveal reveal-delay-100">
          <h4 className="text-white text-sm font-medium mb-4">Навигация</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#catalog" className="hover:text-[#C47B5D]">Каталог</a></li>
            <li><a href="#gallery" className="hover:text-[#C47B5D]">Галерея</a></li>
            <li><a href="#about" className="hover:text-[#C47B5D]">О нас</a></li>
            <li><a href="#reviews" className="hover:text-[#C47B5D]">Отзывы</a></li>
          </ul>
        </div>
        <div className="reveal reveal-delay-200">
          <h4 className="text-white text-sm font-medium mb-4">Контакты</h4>
          <ul className="space-y-2 text-sm">
            <li>+7 (800) 123-45-67</li>
            <li>info@weaveco.ru</li>
            <li>Москва, ул. Ткацкая, 15</li>
          </ul>
        </div>
        <div className="reveal reveal-delay-300">
          <h4 className="text-white text-sm font-medium mb-4">Подписка</h4>
          <div className="flex">
            <input type="email" placeholder="Email" className="flex-1 bg-stone-800 border border-stone-700 px-3 py-2 text-sm focus:outline-none focus:border-[#C47B5D]" />
            <button className="bg-[#C47B5D] px-4 text-white text-sm hover:bg-stone-700 transition">→</button>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
        <p>© 2025 WEAVE&CO. Сделано с <Heart className="w-3 h-3 inline text-[#C47B5D]" /> для вашего дома</p>
      </div>
    </footer>
  );
};

export default Footer;