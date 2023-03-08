import React, { useState } from "react";

export default function Counter({ onClick }) {
  const [count, setCount] = useState(0);
  return (
    <article>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
          onClick();
        }}
      >
        Add+
      </button>
    </article>
  );
}
