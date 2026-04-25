const galleryImages = [
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
  'https://i.pinimg.com/736x/9d/b3/e3/9db3e3c49f8a27f133cfce6ae53cadf7.jpg',
  'https://avatars.mds.yandex.net/i?id=70141e2da3f9211842729c9cadc0a8d45fc16e7b-4238102-images-thumbs&n=13',
  'https://pics.rbc.ru/v2_companies_s3/resized/960xH/media/news_body_images/6da33064-06f1-49ef-86ed-ac9a78d70408.jpg',
  'https://img.freepik.com/premium-photo/pink-minimalism-clean-simple-pink-background-embodying-essence-minimalism-timeless-aesthetic_271410-10262.jpg',
  'https://rudesignshop.ru/wp-content/uploads/2025/07/trendy-minimalizm-2026-dlinnaya-vyderzhka-1766419491.jpg',
  'https://yourroom.ru/images/1458898950_2.jpg',
  'https://i.pinimg.com/736x/24/06/db/2406db52d629114fb4836ca004d261e3.jpg',
  'https://static.tildacdn.com/tild6334-3566-4038-b861-656136663963/ChatGPT_Image_5__202.png',
  'https://i.pinimg.com/originals/86/a1/c6/86a1c68774514ee67c3b374f4b39a38c.jpg',
  'https://images.stroistyle.com/posts/5404782-frantsuzskii-minimalizm-v-interere-34.jpg',
  'https://i.pinimg.com/originals/0d/4f/bd/0d4fbd0f606149c5d2f989ed4c15b594.jpg',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-[#C47B5D] text-sm tracking-wide">ГАЛЕРЕЯ</p>
          <h2 className="text-3xl font-light text-stone-800 mt-2">Вдохновение</h2>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <img key={idx} src={img} alt="галерея" className="w-full break-inside-avoid reveal" style={{ transitionDelay: `${idx * 0.03}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;