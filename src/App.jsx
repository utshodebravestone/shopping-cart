import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="h-8"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h1 className="w-full text-center text-4xl font-bold">
              404 | Page not found
            </h1>
          }
        />
      </Routes>
    </>
  );
};

export default App;
