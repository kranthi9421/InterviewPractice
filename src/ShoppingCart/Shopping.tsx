const shoppingCart = [
  { id: 1, name: "Wireless Mouse", price: 19.99, quantity: 1 },
  { id: 2, name: "Bluetooth Headphones", price: 49.99, quantity: 2 },
  { id: 3, name: "USB-C Charging Cable", price: 7.99, quantity: 3 },
  { id: 4, name: "Laptop Stand", price: 29.99, quantity: 1 },
];

const CartItem = ({ item }) => {
  const total = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex justify-between items-center py-3 border-b">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">
          ${item.price.toFixed(2)} × {item.quantity}
        </p>
      </div>

      <div className="font-semibold">${total}</div>

      <div>{item.quantity}</div>
    </div>
  );
};

export const Shopping = () => {
  const totalPrice = shoppingCart.reduce(
    (a,v) => a + v.price * v.quantity,
    0
  );

  const totalQuantity = shoppingCart.reduce(
    (a,v) => a + v.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="flex justify-between font-bold text-lg mb-4">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
      </header>

      {shoppingCart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <footer className="mt-6 text-right space-y-1">
        <p>
          <strong>Total Quantity:</strong> {totalQuantity}
        </p>
        <p>
          <strong>Total Amount:</strong> ${totalPrice.toFixed(2)}
        </p>
      </footer>
    </div>
  );
};