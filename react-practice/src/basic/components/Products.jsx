import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [checked]);

  return (
    <>
      <input
        id="sale"
        type="checkbox"
        value={checked}
        onChange={handleChecked}
      />
      <label htmlFor="sale">Sale Item🔥</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
