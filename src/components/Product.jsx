/* eslint-disable react/prop-types */

import useCart from "../hooks/useCart";

const Product = ({ product }) => {
  const { title, price, category, description, image } = product;
  const { dispatch } = useCart();

  return (
    <div className="w-full pb-5 bg-white rounded shadow-lg">
      <div className="w-full mb-2 flex justify-center">
        <img src={image} alt={title} className="w-2/5 object-fit" />
      </div>
      <div className="px-5 flex flex-col items-start gap-1">
        <small className="text-3xl font-light">$ {price}</small>
        <h1 className="text-2xl">{title}</h1>
        <p className="font-light">{description}</p>
        <small className="px-3 py-1 text-white font-light bg-slate-600 rounded-full cursor-pointer">
          {category}
        </small>
        <div className="w-full mt-3 flex justify-center">
          <button
            onClick={() =>
              dispatch({ type: "add", payload: { ...product, count: 1 } })
            }
            className="px-10 py-3 bg-amber-400 font-bold border border-amber-400 rounded-full hover:bg-transparent hover:text-amber-400 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
