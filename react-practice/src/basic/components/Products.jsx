import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => setChecked((prev) => !prev);

  useEffect(() => {
    //loading과 error 상태를 항상 초기화 해야 한다. (return()=> 문에서 초기화 하는게 아니군,,)
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => setError("에러가 발생했음"))
      .finally(() => setLoading(false));
  }, [checked]);

  //이렇게 리턴 전에 처리해 주는 구나. prodcuts.legnth가 있는지 판별하는 것보다, state로 따로
  //만들어주어서 처리하는게 훨씬 깔끔하다.
  if (loading) return <h3>Loading...</h3>;
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
