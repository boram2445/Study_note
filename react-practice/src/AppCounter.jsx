import React, { useState } from "react";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);

  const handleTotal = () => setTotalCount(totalCount + 1);

  return (
    <div>
      <header className="count-header">
        <h1>
          Total Count: {totalCount}
          {totalCount >= 10 ? "🔥" : "❄"}
        </h1>
      </header>
      <Counter onClick={handleTotal} />
      <Counter onClick={handleTotal} />
    </div>
  );
}
