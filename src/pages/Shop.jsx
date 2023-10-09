import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Product from "../components/Product";
import useFetch from "../hooks/useFetch";

const baseUrl = "https://fakestoreapi.com";

const Shop = () => {
  const [url, setUrl] = useState(`${baseUrl}/products`);
  const { data: products, error } = useFetch(url);

  useEffect(() => {}, []);

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

  return (
    <section className="w-full p-5">
      <h1 className="text-center text-4xl font-medium">Trending Products</h1>

      <div className="h-5"></div>

      <Filter
        title={"Filter Product: "}
        onFilter={(category) =>
          category === "all"
            ? setUrl(`${baseUrl}/products`)
            : setUrl(`${baseUrl}/products/category/${category}`)
        }
      />

      <div className="h-5"></div>

      {products ? (
        <ul className="w-full my-5 grid grid-cols-2 gap-3">
          {products.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="w-full text-center text-4xl font-bold">
          Loading Products...
        </h1>
      )}
    </section>
  );
};

export default Shop;
