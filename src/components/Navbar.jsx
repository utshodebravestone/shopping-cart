import { Link, NavLink } from "react-router-dom";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const { products } = useCart();

  return (
    <nav className="w-full px-8 py-4 bg-slate-100 flex items-center justify-between shadow-md">
      <Link
        to={"/home"}
        className="text-3xl font-bold hover:text-slate-500 transition-colors duration-300"
      >
        Shopping Cart
      </Link>

      <ul className="flex gap-3">
        <li>
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              `text-xl hover:text-slate-500 transition-colors duration-300 ${
                isActive ? "underline" : "no-underline"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"shop"}
            className={({ isActive }) =>
              `text-xl hover:text-slate-500 transition-colors duration-300 ${
                isActive ? "underline" : "no-underline"
              }`
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"cart"}
            className={({ isActive }) =>
              `text-xl hover:text-slate-500 transition-colors duration-300 ${
                isActive ? "underline" : "no-underline"
              }`
            }
          >
            Cart ({products.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
