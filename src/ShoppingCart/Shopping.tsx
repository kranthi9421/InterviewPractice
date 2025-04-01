const shoppingCart = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 19.99,
    quantity: 1,
    image: "https://example.com/images/mouse.jpg",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 49.99,
    quantity: 2,
    image: "https://example.com/images/headphones.jpg",
  },
  {
    id: 3,
    name: "USB-C Charging Cable",
    price: 7.99,
    quantity: 3,
    image: "https://example.com/images/usb-c-cable.jpg",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 29.99,
    quantity: 1,
    image: "https://example.com/images/laptop-stand.jpg",
  },
  {
    id: 5,
    name: "Smartphone Case",
    price: 14.99,
    quantity: 2,
    image: "https://example.com/images/smartphone-case.jpg",
  },
  {
    id: 6,
    name: "Desk Organizer",
    price: 24.99,
    quantity: 1,
    image: "https://example.com/images/desk-organizer.jpg",
  },
  {
    id: 7,
    name: "4K Monitor",
    price: 349.99,
    quantity: 1,
    image: "https://example.com/images/monitor.jpg",
  },
  {
    id: 8,
    name: "Portable Power Bank",
    price: 19.99,
    quantity: 1,
    image: "https://example.com/images/power-bank.jpg",
  },
  {
    id: 9,
    name: "Gaming Keyboard",
    price: 89.99,
    quantity: 1,
    image: "https://example.com/images/gaming-keyboard.jpg",
  },
  {
    id: 10,
    name: "LED Desk Lamp",
    price: 39.99,
    quantity: 1,
    image: "https://example.com/images/desk-lamp.jpg",
  },
]

export const Shopping = () => {
  const totalPrice = shoppingCart.reduce((a, v) => a + v.price * v.quantity, 0)
  const totalQuantity = shoppingCart.reduce((a, v) => a + v.quantity, 0)
  return (
    <div>
      <div className="flex justify-between mx-[300px]">
        <h1 className="text-5xl py-5">Product</h1>
        <h1 className="text-5xl py-5">Price</h1>
        <h1 className="text-5xl py-5">Quantity</h1>
      </div>
      {shoppingCart.map((item) => (
        <div key={item.id} className=" flex justify-between mx-[300px]">
          <h2>
            {item.name}
            <span className="text-sm">
              <p className="text-blue-700"> Quantity: {item.quantity}</p>
            </span>
            <span className="text-sm text-green-950">
              {item.price.toFixed(2)} x {item.quantity}
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <h2 className="text-red-800">
              ${(item.price * item.quantity).toFixed(2)}
            </h2>
          </div>
          <h2>{item.quantity}</h2>
        </div>
      ))}
      <div className="flex justify-center items-center pt-10">
        <div>Toatal-Amount - ${totalPrice.toFixed(2)}</div>
      </div>
      <div className="flex justify-end mr-[300px] ">
        <div>Quantity - {totalQuantity}</div>
      </div>
    </div>
  )
}
