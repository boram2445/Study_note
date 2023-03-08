import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching....");
    //loading과 error 상태를 항상 초기화 해야 한다. (return()=> 문에서 초기화 하는게 아니군,,)
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => setError("에러가 발생했음"))
      .finally(() => setLoading(false));
  }, [salesOnly]);

  return [loading, error, products];
}
