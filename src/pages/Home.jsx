import { Link } from "react-router-dom";
import Product from "../components/Product";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: products, error } = useFetch(
    "https://fakestoreapi.com/products?limit=6"
  );

  if (error)
    return (
      <>
        <p className="w-full text-center text-2xl font-light">
          An error occurred while fetching data.
        </p>
        <p className="w-full text-center text-2xl font-light">
          Check your internet connection and refresh the browser.
        </p>
      </>
    );

  if (!products)
    return (
      <h1 className="w-full text-center text-4xl font-bold">Loading...</h1>
    );

  return (
    <section className="w-full p-5">
      <h1 className="text-center text-4xl font-medium">Trending Products</h1>

      <ul className="w-full my-5 grid grid-cols-2 gap-3">
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link
          to={"/shop"}
          className="text-2xl font-light hover:text-slate-500 transition-colors duration-300"
        >
          See more...
        </Link>
      </div>
    </section>
  );
};

export default Home;
