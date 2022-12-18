import React from "react";
import Avartar from "./Avartar";

export default function Profile({ img, name, carrer, isNew }) {
  return (
    <div className="profile">
      <Avartar img={img} isNew={isNew} />
      <h1>{name}</h1>
      <p>{carrer}</p>
    </div>
  );
}
