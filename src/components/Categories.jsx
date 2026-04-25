const categories = [
  { name: 'Ковры', image: 'https://avatars.mds.yandex.net/i?id=4f55b30ddf34dead39263f5e7b2c6cf67d5b9e5f-4259532-images-thumbs&n=13', count: '12 моделей' },
  { name: 'Настенные панно', image: 'https://avatars.mds.yandex.net/i?id=ccda9e8199489423922dddda7a815920df7b790a-4119342-images-thumbs&n=13', count: '8 моделей' },
  { name: 'Подушки', image: 'https://avatars.mds.yandex.net/i?id=9126e360d9eabc4f041af351f3e254fc_l-8456088-images-thumbs&n=13', count: '15 моделей' },
  { name: 'Пледы', image: 'https://avatars.mds.yandex.net/i?id=12bfa7b07685686277d96f55448022e72fc417d2-4594612-images-thumbs&n=13', count: '6 моделей' },
];

const Categories = () => {
  return (
    <section className="py-24 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-[#C47B5D] text-sm tracking-wide">КАТЕГОРИИ</p>
          <h2 className="text-3xl font-light text-stone-800 mt-2">Что мы создаём</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="overflow-hidden bg-[#E8D5D0]">
                <img src={cat.image} alt={cat.name} className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <h3 className="text-lg font-medium text-stone-700 mt-4">{cat.name}</h3>
              <p className="text-sm text-stone-400">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;