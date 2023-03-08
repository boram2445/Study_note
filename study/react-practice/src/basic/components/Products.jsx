import React, { useState } from "react";
// import useProducts from "../hooks/use-products";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const [checked, setChecked] = useState(false);
  // const [loading, error, products] = useProducts({ salesOnly: checked });
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(
    ["products", checked],
    async () => {
      console.log("fetching...");
      return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) =>
        res.json()
      );
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  const handleChecked = () => setChecked((prev) => !prev);

  //이렇게 리턴 전에 처리해 주는 구나. prodcuts.legnth가 있는지 판별하는 것보다, state로 따로
  //만들어주어서 처리하는게 훨씬 깔끔하다.
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

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
