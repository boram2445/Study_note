## ๋ฐฐ์ด์  ๐

[1.์์ดํ ์ถ๊ฐ](#1-์์ดํ-์ถ๊ฐ-์ปดํฌ๋ํธ-๋ง๋ค๊ธฐ-form-ํ์ฉํ๊ธฐ) <br/>
[2.์์ดํ ์ญ์ ](#2-์์ดํ-์ญ์ -์ปดํฌ๋ํธ) <br/>
[3.ํํฐ์ ์ฉ](#3-ํํฐ-์ ์ฉํ๊ธฐ) <br/>
[4.CSS](#4-css) <br/>
[5.๋คํฌ๋ชจ๋](#5-๋คํฌ๋ชจ๋-๋ง๋ค๊ธฐ-width-usecontext) <br/>
[6.๋ก์ปฌ์คํ ๋ฆฌ์ง์ ์ ์ฅํ๊ธฐ](#6-๋ก์ปฌ์คํ ๋ฆฌ์ง์-todo-์์ดํ-์ ์ฅํ๊ธฐ) <br/>

### 1) ์์ดํ ์ถ๊ฐ ์ปดํฌ๋ํธ ๋ง๋ค๊ธฐ (form ํ์ฉํ๊ธฐ)

1. ์ปดํฌ๋ํธ๋ณ๋ก ํ์ผ์ ๊ตฌ๋ถ์ง์ด์ jsxํ์ผ๊ณผ cssํ์ผ์ ๋ฌถ์.
2. `๋๋ฆฝ์ ์ธ ์ปดํฌ๋ํธ`๊ฐ ๋๋๋ก ์ต๋ํ ๋ธ๋ ฅํ์
   => ํ์ ์ปดํฌ๋ํธ์์ ์ฒ๋ฆฌํ  ์ ์๋ ๊ฒ๋ค์ ํ์ ์ปดํฌ๋ํธ์์๋ง ์ฒ๋ฆฌํ๋ ๊ฒ์ด ์ข๋ค.(ex. input ๊ฐ์ด ์ ํจํ์ง ๊ฒ์ฌํ๋ ๊ฒ์ addTodo ์ปดํฌ๋ํธ์์ ๋ด๋น, ๊ฒ์ฆ๋ ๊ฐ์ ์์ ์ปดํฌ๋ํธ๋ก ๋๊ฒจ์ค๋ค.)
3. form ํ๊ทธ๋ input๊ณผ submit ๋ฒํผ์ด ๋ค์ด์์ผ๋ฉด ๋๋ค.
   => addTodo ์ปดํฌ๋ํธ๋ก ๋ด๋ ค์ฃผ์
   => ๊ทธ๋ผ handldeSubmit ํจ์๋ ํ์๋ก ๋ด๋ ค์ค ์ ์๋ค!
4. ref.current.value = "" ํ์ง์๊ณ  setState๊ฐ์ ๋น์์ฃผ๋ฉด input ์๋ ฅํ์ ๊ฐ์ ๋น์ธ ์ ์๋ ๋์ผํ ํจ๊ณผ๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๋ค.
5. `if (!text.trim()) return;` ์ด๋ ๊ฒ ํด์ฃผ์ด์ผ, text์๋ ฅ์ด ์๋์์๋ ๋ฟ๋ง ์๋๋ผ, space์๋ ฅ๋ง ๋์์๋๋ returnํด ์ค ์ ์๋ค.
6. text.trim()์ ์๋ณธ์ ์์ ํ๋ค!

```JSX
import React, { useState, useRef } from "react";
import styles from "./addTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState(undefined);
  // const inputRef = useRef();

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd({ id: Math.random(), checked: false, text: text.trim() });
    // inputRef.current.value = "";
    // inputRef.current.focus();
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={handleChange}
          value={text}
          // ref={inputRef}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}


```

### 2. ์์ดํ ์ญ์  ์ปดํฌ๋ํธ

1. ๋ถํ์ํ state๋ ์์ ์ฃผ์.
   => check ์ํ๋ ์์ ์ปดํฌ๋ํธ์์ data๋ก ๋ฐ์์ค๋ ๊ฒ์ธ๋ฐ ์ ํ์ ์ปดํฌ๋ํธ์์ ๊ตณ์ด state๊ฐ์ ๋ง๋ค์ด์ ๊ทธ๊ฑธ ํ์ฉํ๊ณ  ์๋ :>

```jsx
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./item.module.css";

export default function Item({ item, onDelete, onCheck }) {
  // const [itemChecked, setItemChecked] = useState(item.checked);

  const handleChecked = () => {
    // setItemChecked((itemChecked) => !itemChecked);
    onCheck({ ...item, checked: !item.checked });
  };

  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <li className={styles.item}>
      <label className={styles[`${item.checked ? "checked-label" : "label"}`]}>
        <input
          name={item.text}
          type="checkbox"
          onChange={handleChecked}
          checked={item.checked}
        />
        {item.text}
      </label>
      <span className={styles.trash} onClick={handleDelete}>
        <BsTrash />
      </span>
    </li>
  );
}
```

### 3. ํํฐ ์ ์ฉํ๊ธฐ

1. header๋ Todolist ์ปดํฌ๋ํธ์ ์ํ๋ฉด ์๋๋ค App ์ปดํฌ๋ํธ๋ก ์ฌ๋ ค์ฃผ์
2. App ์ปดํฌ๋ํธ์์ filter์ ๋ํ ์ ๋ณด๋ค์ด ๋ค์ด์๋๋ก ํ์
3. ๋์ ์ผ๋ก ๋ณํ๋ list๊ฐ์ด ์๋๋ผ, ๊ณ ์ ๋ ๊ฐ์ผ ๊ฒฝ์ฐ index๋ฅผ ์ฌ์ฉํด๋ ๋๋ค. (ex. nav )
4. ํด๋ฆญ๋๋ ๊ฐ์ ์ต๋ํ button ํ๊ทธ๋ฅผ ์ฌ์ฉํ์
5. ํจ์ ๋ด๋ถ์ ํน์  ๊ฐ์ด ํ์ํ์ง ์์ ๊ฒฝ์ฐ๋ผ๋ฉด ์ปดํฌ๋ํธ ๋ฐ์ผ๋ก ํจ์๋ฅผ ๋นผ๋ด์ ์ ์ธํ์.๋ด๋ถ์ ์์ฑํ๊ฒ ๋๋ฉด ์ปดํฌ๋ํธ๊ฐ re-render ๋ ๋๋ง๋ค ๊ณ์ ๋ถํ์ํ๊ฒ ์ฌ์ ์ธ(์ฌํ ๋น)๋๋ค.

### 4. css

1. ์ต์์ App์ ๊พธ๋ฏธ๊ณ  ์ถ๋ค๋ฉด `#root`์ ์ ์ฉํด๋ ๋๋ค.
2. border-radius๋ฅผ ์ฌ์ฉํ๋๋ฐ ์์ ์์๋๋ฌธ์ ์ ์ฉ์ด ์๋๋ค๋ฉด, ๋ถ๋ชจ์์์ `overflow:hidden`์ ์ฌ์ฉํ์
3. `text-transform:capitalize` ๋ฅผ์ฌ์ฉํ๋ฉด, css๋ก text ์ฒซ๊ธ์๋ฅผ ๋๋ฌธ์๋ก ๋ณ๊ฒฝํ  ์ ์๋ค.
4. `opacity:0.8`๋ก ํด๋๊ณ  hover ๋์์๋ `opacity:1`๋ก ๋๋ฉด ์ ํ๋ ๊ฒ๋ง ์งํ๊ฒ ๋ณด์ด๋๋ก ํ  ์ ์๋ค.
5. postcss์์ className์ ๊ฒฝ์ฐ์ ๋ฐ๋ผ ์ ๊ฑฐํ๊ฑฐ๋ ๋ถ์ด๊ณ  ์ถ์ ๊ฒฝ์ฐ์๋ ์๋์ฒ๋ผ ํ๋ฉด ๋๋ค.

```jsx
<button classNmae={`${styles.filter} ${filter === value && styles.selected} `}>
  {value}
</button>
```

6. `filter:brightness(-%)` ์์ฑ์ ์ฌ์ฉํ๋ฉด ์์์ ๋ ๋ฐ๊ฒ ํ  ์ ์๋ค.
7. postcss๋ ๊ฐ ํ์ผ๋ณ๋ก ๋ชจ๋๋ก ๊ด๋ฆฌํด ์ฃผ๊ธฐ ๋๋ฌธ์, className์ ๋ณต์กํ๊ฒ ํ  ํ์์๋ค!
   (์ด์ ์๋ header-container ์ด๋ฐ์์ผ๋ก className์ ์ฃผ์๋๋ฐ ์ฌ์ค ์ด๋ด ํ์๊ฐ ์๋ ๊ฒ์ด์๋ค,,)
8. `flex` ์์ฑ์ flex-grow, flex-shrink, flex-basis๋ฅผ ํ๋ฒ์ ์ธ ์ ์๋ ์์ฑ์ด๋ค. ์ด์ ์๋ ๋ ์์ ๋ฐฐ์น๋ฅผ ํ๊ณ  ์ถ์ผ๋ฉด wrapper๋ก ๊ฐ์ธ์ฃผ์๋๋ฐ ๊ทธ๋ด ํ์์์ด ์์์์์ flex ์์ฑ์ ์ฐ๋ฉด ์๋ ๋ฐฐ์น๊ฐ ๋๋ค (์ ๊ธฐ๋ฐฉ๊ธฐ,,)

=> 3๊ฐ์ ์์ ์์๊ฐ ์๋ ์ํฉ์์ ๋ถ๋ชจ ์์์์ `space-between`์ด ์ ์ฉ๋ ์๋ ์ํ์ด๋ฉด 3๊ฐ๊ฐ ๋ชจ๋ ๋จ์ด์ง๊ณ  ๊ฐ์ด๋ฐ ์์๊ฐ ์ ๊ฐ์ด๋ฐ ์์นํ๊ฒ ๋๋๋ฐ, ๊ฐ์ด๋ฐ ์์๊ฐ ๊ฝ ์ฐจ๊ฒ ํ๊ณ  ์ถ๋ค๋ฉด `flex:1 1 auto;`๋ฅผ ์จ์ฃผ๋ฉด ๋๋ค.๐

```css
/* .form .wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
} */
= > ์ด๋ ๊ฒ ๊ทธ๋ฆฌ๋๋ก ์ฌ์ฉํด์ค ํ์๊ฐ ์๋ค .input {
  flex: 1 0 auto;
  padding: 1.1rem;
  border: 0;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px 0 0 10px;
}
```

### 5. ๋คํฌ๋ชจ๋ ๋ง๋ค๊ธฐ (width useContext)

1. ์ค์ค๋ก ํด๋ณธ ๋ฐฉ๋ฒ์, ์์์ ๋ณ๊ฒฝํด์ผํ๋ ์ปดํฌ๋ํธ๋ง๋ค className์ .dark๋ฅผ ๋ถ์ฌ์ฃผ๋ ๋ฐฉ์์ด์๋ค. (๋นํจ์จ์ ์ด๋ผ๋ ์๊ฐ์ด ๊ตฌํํ๋ฉด์๋ ๋ค์๋ค๐ค)
2. ์๋ฆฌ์ค์ด ํ ๋ฐฉ๋ฒ์, localStorage์ darkMode์ธ์ง๋ฅผ ์ ์ฅํ๊ณ , ์ ์ฒด html์ class๋ฅผ ์ง์ ํ๋ ๋ฐฉ์์ด๋ค.
3. html.dark์ผ๋๋ง ์ํ๋ ์์ ๋ณ์ ๊ฐ์ ์๋ก์ด ๊ฐ์ผ๋ก ๋ณ๊ฒฝํด ์ฃผ๋ฉด๋๋ค. (์ด๋ฐฉ์์ผ๋ก ํ๋ฉด ๋ฐ๋ก ์ปดํฌ๋ํธ์์ ์ค์ ํด ์ฃผ๋ ๊ฒ ์์ด ๊ฐํธํ๊ฒ ์์์ ๋ณ๊ฒฝํ  ์ ์๋ค๐๐)

```
:root {
  /* color */
  --color-main: #ef6c00;
  --color-point: #e0e0e0;
  --color-white: #ffffff;
  --color-bg-light: #ffffff;
  --color-bg: #f4f4f4;
  --color-darkGrey: #37474f;
  --color-font: #37474f;
}

html.dark {
  --color-bg: #020628;
  --color-bg-light: #13193f;
  --color-font: #ffffff;
}
```

### 6. ๋ก์ปฌ์คํ ๋ฆฌ์ง์ todo ์์ดํ ์ ์ฅํ๊ธฐ

1.  setItem, getItem ๋ฉ์๋๋ฅผ ์ฌ์ฉํ์ง ์์๋ ์ด๋ ๊ฒ ๊ฐ๋จํ๊ฒ ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ๊ฐ์ ์ ์ฅํ๊ณ  ๋ฐ์์ฌ ์ ์๋ค.

    ```jsx
    //๊ฐ ์ ์ฅํ๊ธฐ
    (๋) => localStorage.setItem("items", JSON.stringify(newArr));
    (๊ฐํธ) => (localStorage.items = JSON.stringify(newArr));

    //๊ฐ ๋ฐ์์ค๊ธฐ
    (๋) => JSON.parse(localStorage.getItem("items"));
    (๊ฐํธ) => JSON.parse(localStorage.items);
    ```

2.  todo ์์ดํ์ด ์์ฑ, ์ญ์  ํ๋ ํจ์ ๋ชจ๋์ localStorage์ ๋ณ๊ฒฝ๊ฐ์ ์๋ฐ์ดํธ ํด์ฃผ๋ ์ฝ๋๋ฅผ ์ง๋ ๊ฒ์ด ์๋๋ผ, useEffect๋ฅผ ํ์ฉํ์ฌ todo๊ฐ์ด ๋ณ๊ฒฝ๋ ๋๋ง๋ค localStorage๋ฅผ ์๋ฐ์ดํธ ํด์ฃผ๋ ์ฝ๋๋ก ๊ตฌํํ๋ฉด ๋งค์ฐ ๊ฐ๋จํด์ง๋ค! ๐
3.  useState ํ์ ์ธ์๋ก ์ด๊ธฐ๊ฐ์ ์ ๋ฌํด ์ค ์ ์๋๋ฐ, ๊ฐ ๋๋ ์ฝ๋ฐฑํจ์ ๋ชจ๋ ๊ฐ๋ฅํ๋ค.

- ์ปดํฌ๋ํธ๊ฐ re-render๋๋ฉด ์ปดํฌ๋ํธ ๋ด๋ถ์ ๋ชจ๋  ๊ฐ์ด ์ฌํธ์ถ ๋๋ฉด์ ์ด๊ธฐํ ๋์ง๋ง, useState๋ ๋ด๋ถ์ ์ผ๋ก ๊ฐ์ ๊ธฐ์ตํ๋ค. ๋ด๋ถ์ ๊ฐ์ด ์๋ฐ์ดํธ ๋๋ฉด, ์ด๊ธฐ๊ฐ์ ๋ฌด์ํ๊ณ  ์๋ฐ์ดํธ๋ ๊ฐ์ ๊ธฐ์ตํ๊ฒ ๋๋ค.
- ๊ทธ๋ฌ๋, ์ด๊ธฐ๊ฐ์ ํจ์๋ฅผ ํธ์ถํด์ ๋ฐ์ดํฐ๋ฅผ ์ฝ์ด์ค๊ฑฐ๋, localStorage๋ฅผ ์ฌ์ฉํ๊ฑฐ๋, ๋คํธ์ํฌ์์ผ๋ก ์ฝ์ด์ค๋ฉด ์ปดํฌ๋ํธ๊ฐ re-render ๋ ๋๋ง๋ค ์ด๊ธฐ๊ฐ์ ๋ค์ ๋ถ๋ฌ์จ๋ค. ๋ด๋ถ์ ์ผ๋ก ์๋ฐ์ดํธ ๋ ๊ฐ์ ์ฌ์ฉํ๊ธฐ ๋๋ฌธ์ UI์์ผ๋ก๋ ๋ฌธ์ ๊ฐ ์์ง๋ง, ๋ถํ์ํ ํ๋์ ํ๊ณ  ์๋ ๊ฒ์ด ๋๋ค.

โ ์ด๊ธฐ๊ฐ์ผ๋ก ํจ์์์ ๋ฐ์์จ ๊ฐ์ ์ฌ์ฉํ๊ธฐ ์ํด์๋ ์๋์ฒ๋ผ ํจ์์ ์ฐธ์กฐ๊ฐ๋ง์ ์ ๋ฌํ๊ฑฐ๋ ํ์ดํ ํจ์๋ก ๊ฐ์ธ์ฃผ์ด์ผ ์ฒ์ ์ปดํฌ๋ํธ๊ฐ mount๋์์๋๋ง ์คํ๋๋ค.

```jsx
//bad
const [todos, setTodos] = useState(readTodosFromLocalStorage());
//cooooooooooooool
const [todos, setTodos] = useState(readTodosFromLocalStorage);
//coool - ๋ถํ์ํ ํจ์๊ฐ ๋ง๋ค์ด์ง๋ค๋ ๋จ์ 
const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
```
