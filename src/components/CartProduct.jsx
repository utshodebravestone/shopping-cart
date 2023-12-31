/* eslint-disable react/prop-types */

const CartProduct = ({
  dispatch,
  product: { id, image, title, price, count },
}) => {
  return (
    <div>
      <div className="w-full pb-5 flex items-center justify-between bg-white rounded shadow-lg">
        <div className="w-1/4 flex justify-center">
          <img src={image} alt={title} className="w-2/4 object-fit" />
        </div>
        <div className="px-5 flex flex-col items-end gap-1">
          <small className="text-3xl font-light">$ {price}</small>
          <h1 className="text-xl text-end">{title}</h1>
          <div className="w-full mt-3 flex justify-end items-center gap-3">
            <button
              onClick={() =>
                dispatch({
                  type: "inc",
                  payload: id,
                })
              }
              className="px-3 py-1 bg-amber-400 font-bold border border-amber-400 rounded-full hover:bg-transparent hover:text-amber-400 transition-colors duration-300"
            >
              +
            </button>
            <p className="text-2xl font-bold"> {count}</p>
            <button
              onClick={() =>
                dispatch({
                  type: "dec",
                  payload: id,
                })
              }
              className="px-3 py-1 bg-amber-400 font-bold border border-amber-400 rounded-full hover:bg-transparent hover:text-amber-400 transition-colors duration-300"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: "remove", payload: id })}
        className="w-full px-3 py-1 bg-red-600 text-white font-bold border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition-colors duration-300"
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
