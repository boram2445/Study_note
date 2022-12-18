import React, { useState } from "react";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div>
      <button onClick={() => setShowProducts(!showProducts)}>toggle</button>
      {showProducts && <Products />}
    </div>
  );
}
