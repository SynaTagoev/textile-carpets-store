import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const Catalog = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Все товары');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);

  // Загрузка избранного
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setLikedProducts(wishlist);
  }, []);

  // Фильтрация товаров — вычисляется при каждом рендере
  const getFilteredProducts = () => {
    let filtered = products.filter(product => {
      if (selectedCategory !== 'Все товары' && product.category !== selectedCategory) {
        return false;
      }
      if (product.price < priceRange.min || product.price > priceRange.max) {
        return false;
      }
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });

    // Сортировка
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => (b.badge === 'Хит' ? 1 : -1));
    }
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const toggleLike = (productId) => {
    let newWishlist;
    if (likedProducts.includes(productId)) {
      newWishlist = likedProducts.filter(id => id !== productId);
    } else {
      newWishlist = [...likedProducts, productId];
    }
    setLikedProducts(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const clearFilters = () => {
    setSelectedCategory('Все товары');
    setPriceRange({ min: 0, max: 50000 });
    setSearchQuery('');
    setSortBy('popular');
  };

  return (
    <section id="catalog" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12 reveal">
          <p className="text-terracotta text-sm tracking-wide">КОЛЛЕКЦИЯ</p>
          <h2 className="font-serif text-3xl font-light text-dark mt-2">Каталог товаров</h2>
          <p className="text-warmgray mt-3">{products.length} уникальных изделий ручной работы</p>
        </div>

        {/* Поиск и фильтры */}
        <div className="mb-8 reveal reveal-delay-100">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-300 focus:outline-none focus:border-terracotta bg-white"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-2 border border-stone-300 hover:border-terracotta transition"
            >
              <Filter className="w-4 h-4" /> Фильтры
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-stone-300 focus:outline-none focus:border-terracotta bg-white"
            >
              <option value="popular">По популярности</option>
              <option value="price-asc">По возрастанию цены</option>
              <option value="price-desc">По убыванию цены</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>

          {/* Фильтры */}
          <div className={`${showFilters ? 'block' : 'hidden md:block'} bg-white p-4 border border-stone-200`}>
            <div className="flex flex-wrap gap-6">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-dark mb-2">Категории</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`px-3 py-1 text-sm transition-all ${
                        selectedCategory === cat.name
                          ? 'bg-dark text-white'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-64">
                <h3 className="text-sm font-medium text-dark mb-2">Цена (₽)</h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="от"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) || 0 })}
                    className="w-full px-2 py-1 border border-stone-300 focus:outline-none focus:border-terracotta"
                  />
                  <input
                    type="number"
                    placeholder="до"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) || 50000 })}
                    className="w-full px-2 py-1 border border-stone-300 focus:outline-none focus:border-terracotta"
                  />
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="self-end px-3 py-1 text-sm text-terracotta hover:text-dark transition"
              >
                <X className="w-4 h-4 inline mr-1" /> Сбросить
              </button>
            </div>
          </div>
        </div>

        {/* Результаты */}
        <div className="mb-4 text-sm text-stone-500 reveal reveal-delay-200">
          Найдено товаров: {filteredProducts.length}
        </div>

        {/* Сетка товаров */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white border border-stone-200">
            <p className="text-stone-500">Товары не найдены</p>
            <p className="text-sm text-stone-400 mt-1">Попробуйте изменить параметры поиска</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="reveal-scale" style={{ transitionDelay: `${index * 0.05}s` }}>
                <ProductCard 
                  product={product}
                  onAddToCart={onAddToCart}
                  isLiked={likedProducts.includes(product.id)}
                  onLike={() => toggleLike(product.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;