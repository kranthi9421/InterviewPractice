import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
};

type CartProduct = {
  productId: number;
  quantity: number;
};

const Profile = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [cartResponse, productResponse] = await Promise.all([
        fetch("https://fakestoreapi.com/carts/1"),
        fetch("https://fakestoreapi.com/products"),
      ]);

      const cart = await cartResponse.json();
      const products: Product[] = await productResponse.json();

      const result = cart.products.map((item: CartProduct) => {
        const product = products.find(
          (product) => product.id === item.productId
        );

        return {
          id: item.productId,
          title: product?.title ?? "Unknown Product",
          image: product?.image ?? "",
        };
      });

      setCartItems(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Profile