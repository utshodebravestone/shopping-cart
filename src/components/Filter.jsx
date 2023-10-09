/* eslint-disable react/prop-types */

import useFetch from "../hooks/useFetch";

const Filter = ({ title, onFilter }) => {
  const { data: categories, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
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

  if (!categories)
    return (
      <h1 className="w-full text-center text-4xl font-bold">
        Loading Filter...
      </h1>
    );

  return (
    <div className="w-full flex justify-center items-center gap-5">
      <label className="text-2xl">{title}</label>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="px-4 py-2 border-b border-slate-700 rounded appearance-none"
      >
        <option value={"all"}>Choose a Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
