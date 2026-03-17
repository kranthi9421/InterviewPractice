type Product = {
  id: number;
  title: string;
  image: string;
};

type CartProduct = {
  productId: number;
  quantity: number;
};

type ProductItem = {
  image: string;
  title: string;
};

const Profile: React.FC = () => {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/carts/1").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
    ])
    .then(([carts, products]) => {
      const merged = carts.products.map((item: CartProduct) => {
        const product = products.find((p: Product) => p.id === item.productId);
        return {
          image: product?.image ?? "",
          title: product?.title ?? "Unknown Product",
        };
      });
      setCartItems(merged);
    });
  }, []);

  return (
    <>
      {cartItems.map((item: ProductItem, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <img className="w-24" src={item.image} alt={item.title} />
        </div>
      ))}
    </>
  );
};

export default Profile;
