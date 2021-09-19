import currencyToEuro from '../helper/func';

export default function ShoppingCart({ cartItems }) {
  let total = 0;
  if (cartItems?.length > 0) {
    total = cartItems.reduce(
      (cumul = 0, item) => +cumul + +item.price * item.quantity,
      0
    );
  }

  return (
    <div className="relative transition-all duration-300 ease-in-out opacity-100 transform translate-x-0">
      <div className="absolute right-0 top-0 bg-white p-4 rounded border-2 shadow-lg ">
        {cartItems.map((item) => (
          <p key={item.id}>
            {item.title}
            <span className="font-medium"> x{item.quantity}</span>
            {' : '}
            {currencyToEuro(item.price * item.quantity)}
          </p>
        ))}
        <p className="font-medium">TOTAL = {currencyToEuro(total)}</p>
        <button className="py-1 px-2 m-2 border rounded-md bg-blue-700 hover:bg-blue-600 text-white">
          Commander
        </button>
      </div>
    </div>
  );
}
