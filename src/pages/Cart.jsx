import CartProduct from "../components/CartProduct";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { products, dispatch } = useCart();

  return (
    <section className="px-5 mb-5">
      <h1 className="my-3 text-4xl text-center font-bold">Purchased Items</h1>

      <ul className="flex flex-col gap-5">
        {products.map((product) => (
          <li key={product.id}>
            <CartProduct dispatch={dispatch} product={product} />
          </li>
        ))}
      </ul>

      <div className="w-full my-5">
        <h1 className="text-4xl text-end font-light">
          Total Price:{" "}
          {products
            .reduce((acc, it) => (acc += it.price * it.count), 0)
            .toFixed(2)}
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-10 py-3 bg-amber-400 font-bold border border-amber-400 rounded-full hover:bg-transparent hover:text-amber-400 transition-colors duration-300"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
