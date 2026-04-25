import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Header = ({ cartCount, onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = ['Каталог', 'Галерея', 'О нас', 'Контакты'];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="text-2xl font-medium tracking-wide text-stone-800">
            WEAVE<span className="text-[#C47B5D]">&CO</span>
          </a>

          <nav className="hidden md:flex gap-10">
            {nav.map(item => (
              <a key={item} href={`#${item === 'Каталог' ? 'catalog' : item === 'Галерея' ? 'gallery' : item === 'О нас' ? 'about' : 'footer'}`} 
                 className="text-stone-500 hover:text-[#C47B5D] text-sm tracking-wide transition">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={onCartOpen} className="relative">
              <ShoppingBag className="w-5 h-5 text-stone-700" />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-[#C47B5D] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 bg-white border-t border-stone-100 p-6 flex flex-col gap-4 z-40 md:hidden">
          {nav.map(item => (
            <a key={item} href={`#${item === 'Каталог' ? 'catalog' : item === 'Галерея' ? 'gallery' : item === 'О нас' ? 'about' : 'footer'}`} 
               className="text-stone-600" onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;