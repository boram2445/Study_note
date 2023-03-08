import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  }); //항상 초기값을 설정해 주어야 한다.

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target; //const name = e.target.name;
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일: </label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}
