import { Star } from 'lucide-react';
import { reviews } from '../data/products';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-terracotta text-sm tracking-wide">ОТЗЫВЫ</p>
          <h2 className="font-serif text-3xl font-light text-dark mt-2">Клиенты говорят</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={review.id} className="bg-white p-6 shadow-sm hover:shadow-md transition reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-dark">{review.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-xs text-stone-400 mt-1">{review.date}</p>
                </div>
              </div>
              <p className="text-warmgray text-sm leading-relaxed italic">“{review.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;