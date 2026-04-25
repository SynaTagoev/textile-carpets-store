import { X, Trash2, ShoppingBag, Truck, CreditCard } from 'lucide-react';
import { useState } from 'react';

const CartSidebar = ({ isOpen, onClose, cart, onRemoveFromCart, onUpdateQuantity, onClearCart }) => {
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '' });
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = total >= 5000 ? 0 : 500;
  const final = total + delivery;

  // Функция закрытия корзины
  const handleClose = () => {
    setCheckout(false);
    setSuccess(false);
    onClose();
  };

  const submitOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert('Заполните все поля');
      return;
    }
    const order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      customer: form,
      items: cart,
      total: final,
      delivery: delivery
    };
    const history = JSON.parse(localStorage.getItem('ordersHistory') || '[]');
    history.push(order);
    localStorage.setItem('ordersHistory', JSON.stringify(history));
    onClearCart();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setCheckout(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  if (success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white p-8 max-w-sm text-center relative">
          <button onClick={handleClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600">
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-6 h-6 text-terracotta" />
          </div>
          <h3 className="text-xl font-light">Спасибо за заказ!</h3>
          <p className="text-stone-500 text-sm mt-2">Мы свяжемся с вами в ближайшее время.</p>
          <button onClick={handleClose} className="mt-6 border border-stone-300 px-6 py-2 text-sm hover:bg-stone-800 hover:text-white transition">
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  if (checkout) {
    return (
      <>
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setCheckout(false)} />
        <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-xl">
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-lg font-light">Оформление</h2>
            <button onClick={() => setCheckout(false)} className="hover:text-terracotta transition">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-5 space-y-4 overflow-y-auto">
            <input
              type="text"
              placeholder="Имя *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-terracotta"
            />
            <input
              type="tel"
              placeholder="Телефон *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-terracotta"
            />
            <input
              type="text"
              placeholder="Адрес *"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-terracotta"
            />
            <div className="bg-stone-50 p-4 space-y-2">
              <p className="flex justify-between"><span>Товары</span><span>{total.toLocaleString()}₽</span></p>
              <p className="flex justify-between"><span>Доставка</span><span>{delivery ? `${delivery.toLocaleString()}₽` : 'бесплатно'}</span></p>
              <p className="flex justify-between font-medium pt-2 border-t"><span>Итого</span><span>{final.toLocaleString()}₽</span></p>
            </div>
          </div>
          <div className="p-5 border-t">
            <button onClick={submitOrder} className="w-full bg-dark text-white py-3 hover:bg-terracotta transition">
              Подтвердить заказ
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={handleClose} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-xl">
        <div className="p-5 border-b flex justify-between items-center">
          <h2 className="text-lg font-light flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Корзина
          </h2>
          <button onClick={handleClose} className="hover:text-terracotta transition">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-stone-400 py-12">Корзина пуста</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 pb-4 border-b">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-stone-500">{item.price.toLocaleString()}₽</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="border px-2 hover:border-terracotta transition">
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="border px-2 hover:border-terracotta transition">
                      +
                    </button>
                    <button onClick={() => onRemoveFromCart(item.id)}>
                      <Trash2 className="w-4 h-4 text-stone-400 hover:text-red-500 transition" />
                    </button>
                  </div>
                </div>
                <div className="font-medium">{(item.price * item.quantity).toLocaleString()}₽</div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-5 border-t">
            <div className="flex justify-between mb-4">
              <span>Итого</span>
              <span className="text-xl font-medium">{final.toLocaleString()}₽</span>
            </div>
            <button onClick={() => setCheckout(true)} className="w-full bg-dark text-white py-3 hover:bg-terracotta transition">
              Оформить заказ
            </button>
            {total < 5000 && (
              <p className="text-center text-xs text-stone-400 mt-2">
                До бесплатной доставки {(5000 - total).toLocaleString()}₽
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;