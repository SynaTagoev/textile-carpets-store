import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Consultation = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      alert('Заполните имя, телефон и email');
      return;
    }
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="consultation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="reveal-left">
          <p className="text-[#C47B5D] text-sm tracking-wide mb-4">СВЯЗЬ</p>
          <h2 className="text-4xl font-light text-stone-800 mb-6">Нужна консультация?</h2>
          <p className="text-stone-500 mb-8">Расскажите о вашем проекте — мы поможем подобрать текстиль под интерьер, размер и бюджет.</p>
          <div className="space-y-3 text-stone-600">
            <p className="flex items-center gap-3"><span className="w-2 h-2 bg-[#C47B5D] rounded-full"></span>Подбор по фото</p>
            <p className="flex items-center gap-3"><span className="w-2 h-2 bg-[#C47B5D] rounded-full"></span>Расчёт стоимости за 15 минут</p>
            <p className="flex items-center gap-3"><span className="w-2 h-2 bg-[#C47B5D] rounded-full"></span>Бесплатно</p>
          </div>
        </div>

        <div className="reveal-right">
          {sent ? (
            <div className="border border-[#9AA98A]/30 p-8 text-center">
              <CheckCircle className="w-10 h-10 text-[#C47B5D] mx-auto mb-3" />
              <p className="text-stone-700">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" placeholder="Имя *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-[#C47B5D]" />
              <input type="tel" name="phone" placeholder="Телефон *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-[#C47B5D]" />
              <input type="email" name="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-[#C47B5D]" />
              <textarea name="message" placeholder="Сообщение" rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border-b border-stone-300 py-2 bg-transparent focus:outline-none focus:border-[#C47B5D] resize-none"></textarea>
              <button type="submit" className="w-full border border-stone-800 py-3 text-sm hover:bg-stone-800 hover:text-white transition">Отправить</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Consultation;