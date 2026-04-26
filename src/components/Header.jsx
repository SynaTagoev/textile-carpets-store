import { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, Package } from 'lucide-react';

const Header = ({ cartCount, onCartOpen, onOrdersOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = ['Каталог', 'Галерея', 'О нас', 'Отзывы', 'Контакты'];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-light tracking-wide text-stone-800">
            WEAVE<span className="text-terracotta">&CO</span>
          </a>

          <nav className="hidden md:flex gap-8">
            {nav.map(item => (
              <a key={item} href={`#${item === 'Каталог' ? 'catalog' : item === 'Галерея' ? 'gallery' : item === 'О нас' ? 'about' : item === 'Отзывы' ? 'reviews' : 'footer'}`} 
                 className="text-stone-600 hover:text-terracotta text-sm tracking-wide transition">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={onOrdersOpen} className="relative p-2 hover:bg-stone-100 rounded-full transition">
              <Package className="w-5 h-5 text-stone-700" />
            </button>
            <button onClick={onCartOpen} className="relative p-2 hover:bg-stone-100 rounded-full transition">
              <ShoppingBag className="w-5 h-5 text-stone-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-[65px] left-0 right-0 bg-white border-t border-stone-100 p-5 flex flex-col gap-4 z-40 md:hidden">
          {nav.map(item => (
            <a key={item} href={`#${item === 'Каталог' ? 'catalog' : item === 'Галерея' ? 'gallery' : item === 'О нас' ? 'about' : item === 'Отзывы' ? 'reviews' : 'footer'}`} 
               className="text-stone-600" onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button onClick={onOrdersOpen} className="text-left text-stone-600 py-2 border-t border-stone-100 mt-2">
            История заказов
          </button>
        </div>
      )}
    </>
  );
};

export default Header;