import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, isLiked, onLike }) => {
  return (
    <div className="group bg-white border border-stone-200 p-4 hover:border-terracotta transition">
      <div className="relative overflow-hidden bg-stone-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-500"
        />
        {product.badge && (
          <span className={`absolute top-3 right-3 px-2 py-1 text-xs text-white ${
            product.badge === 'Хит' ? 'bg-terracotta' : 
            product.badge === 'Новинка' ? 'bg-sage' : 'bg-dark'
          }`}>
            {product.badge}
          </span>
        )}
        <button 
          onClick={onLike}
          className="absolute top-3 left-3 bg-white/80 p-1.5 hover:bg-white transition"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-terracotta text-terracotta' : 'text-stone-500'}`} />
        </button>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'text-yellow-500 fill-yellow-500' : 'text-stone-300'}`} />
          ))}
          <span className="text-xs text-stone-400 ml-1">({product.rating})</span>
        </div>
        <h3 className="font-medium text-dark hover:text-terracotta transition cursor-pointer">
          {product.name}
        </h3>
        <p className="text-xs text-stone-400 mt-1">{product.material} | {product.size}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-medium text-terracotta">{product.price.toLocaleString()}₽</span>
          {product.oldPrice && <span className="text-sm text-stone-400 line-through">{product.oldPrice.toLocaleString()}₽</span>}
        </div>
        <button 
          onClick={() => onAddToCart(product)} 
          className="mt-3 w-full border border-stone-300 py-2 text-sm hover:bg-dark hover:text-white hover:border-dark transition"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;