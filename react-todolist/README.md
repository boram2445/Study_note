## 배운점 📚

[1.아이템 추가](#1-아이템-추가-컴포넌트-만들기-form-활용하기)
[2.아이템 삭제](#2-아이템-삭제-컴포넌트)
[3.필터적용](#3-필터-적용하기)
[4.CSS](#4-css)
[5.다크모드](#5-다크모드-만들기-width-usecontext)
[6.로컬스토리지에 저장하기](#6-로컬스토리지에-todo-아이템-저장하기)

#### 1) 아이템 추가 컴포넌트 만들기 (form 활용하기)

1. 컴포넌트별로 파일을 구분지어서 jsx파일과 css파일을 묶자.
2. `독립적인 컴포넌트`가 되도록 최대한 노력하자
   => 하위 컴포넌트에서 처리할 수 있는 것들은 하위 컴포넌트에서만 처리하는 것이 좋다.(ex. input 값이 유효한지 검사하는 것은 addTodo 컴포넌트에서 담당, 검증된 값을 상위 컴포넌트로 넘겨준다.)
3. form 태그는 input과 submit 버튼이 들어있으면 된다.
   => addTodo 컴포넌트로 내려주자
   => 그럼 handldeSubmit 함수도 하위로 내려줄 수 있다!
4. ref.current.value = "" 하지않고 setState값을 비워주면 input 입력후에 값을 비울 수 있는 동일한 효과를 가져올 수 있다.
5. `if (!text.trim()) return;` 이렇게 해주어야, text입력이 안되었을때 뿐만 아니라, space입력만 되었을때도 return해 줄 수 있다.
6. text.trim()은 원본을 수정한다!

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

### 2. 아이템 삭제 컴포넌트

1. 불필요한 state는 없애주자.
   => check 상태는 상위 컴포넌트에서 data로 받아오는 것인데 왜 하위 컴포넌트에서 굳이 state값을 만들어서 그걸 활용하고 있니 :>

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

### 3. 필터 적용하기

1. header는 Todolist 컴포넌트에 속하면 안된다 App 컴포넌트로 올려주자
2. App 컴포넌트에서 filter에 대한 정보들이 들어있도록 하자
3. 동적으로 변하는 list값이 아니라, 고정된 값일 경우 index를 사용해도 된다. (ex. nav )
4. 클릭되는 값은 최대한 button 태그를 사용하자
5. 함수 내부의 특정 값이 필요하지 않은 경우라면 컴포넌트 밖으로 함수를 빼내서 선언하자.내부에 작성하게 되면 컴포넌트가 re-render 될때마다 계속 불필요하게 재선언(재할당)된다.

### 4. css

1. 최상위 App을 꾸미고 싶다면 `#root`에 적용해도 된다.
2. border-radius를 사용했는데 자식 요소떄문에 적용이 안된다면, 부모요소에 `overflow:hidden`을 사용하자
3. `text-transform:capitalize` 를사용하면, css로 text 첫글자를 대문자로 변경할 수 있다.
4. `opacity:0.8`로 해두고 hover 되었을때 `opacity:1`로 두면 선택된 것만 진하게 보이도록 할 수 있다.
5. postcss에서 className을 경우에 따라 제거하거나 붙이고 싶을 경우에는 아래처럼 하면 된다.

```jsx
<button classNmae={`${styles.filter} ${filter === value && styles.selected} `}>
  {value}
</button>
```

6. `filter:brightness(-%)` 속성을 사용하면 색상을 더 밝게 할 수 있다.
7. postcss는 각 파일별로 모듈로 관리해 주기 때문에, className을 복잡하게 할 필요없다!
   (이전에는 header-container 이런식으로 className을 주었는데 사실 이럴 필요가 없는 것이었다,,)
8. `flex` 속성은 flex-grow, flex-shrink, flex-basis를 한번에 쓸 수 있는 속성이다. 이전에는 두 요소 배치를 하고 싶으면 wrapper로 감싸주었는데 그럴 필요없이 자식요소에 flex 속성을 쓰면 자동 배치가 된다 (신기방기,,)

=> 3개의 자식 요소가 있는 상황에서 부모 요소에서 `space-between`이 적용되 있는 상태이면 3개가 모두 떨어지고 가운데 요소가 정가운데 위치하게 되는데, 가운데 요소가 꽉 차게 하고 싶다면 `flex:1 1 auto;`를 써주면 된다.👍

```css
/* .form .wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
} */
= > 이렇게 그리드로 사용해줄 필요가 없다 .input {
  flex: 1 0 auto;
  padding: 1.1rem;
  border: 0;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 10px 0 0 10px;
}
```

### 5. 다크모드 만들기 (width useContext)

1. 스스로 해본 방법은, 색상을 변경해야하는 컴포넌트마다 className에 .dark를 붙여주는 방식이었다. (비효율적이라는 생각이 구현하면서도 들었다🤔)
2. 엘리쌤이 한 방법은, localStorage에 darkMode인지를 저장하고, 전체 html에 class를 지정하는 방식이다.
3. html.dark일때만 원하는 색상 변수 값을 새로운 값으로 변경해 주면된다. (이방식으로 하면 따로 컴포넌트에서 설정해 주는 것 없이 간편하게 색상을 변경할 수 있다😚👍)

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

### 6. 로컬스토리지에 todo 아이템 저장하기

1.  setItem, getItem 메서드를 사용하지 않아도 이렇게 간단하게 로컬스토리지에 값을 저장하고 받아올 수 있다.

    ```jsx
    //값 저장하기
    (나) => localStorage.setItem("items", JSON.stringify(newArr));
    (간편) => (localStorage.items = JSON.stringify(newArr));

    //값 받아오기
    (나) => JSON.parse(localStorage.getItem("items"));
    (간편) => JSON.parse(localStorage.items);
    ```

2.  todo 아이템이 생성, 삭제 하는 함수 모두에 localStorage에 변경값을 업데이트 해주는 코드를 짜는 것이 아니라, useEffect를 활용하여 todo값이 변경될때마다 localStorage를 업데이트 해주는 코드로 구현하면 매우 간단해진다! 😂
3.  useState 훅은 인자로 초기값을 전달해 줄 수 있는데, 값 또는 콜백함수 모두 가능하다.

- 컴포넌트가 re-render되면 컴포넌트 내부의 모든 값이 재호출 되면서 초기화 되지만, useState는 내부적으로 값을 기억한다. 내부의 값이 업데이트 되면, 초기값은 무시하고 업데이트된 값을 기억하게 된다.
- 그러나, 초기값에 함수를 호출해서 데이터를 읽어오거나, localStorage를 사용하거나, 네트워크상으로 읽어오면 컴포넌트가 re-render 될때마다 초기값을 다시 불러온다. 내부적으로 업데이트 된 값을 사용하기 때문에 UI상으로는 문제가 없지만, 불필요한 행동을 하고 있는 것이 된다.

⇒ 초기값으로 함수에서 받아온 값을 사용하기 위해서는 아래처럼 함수의 참조값만을 전달하거나 화살표 함수로 감싸주어야 처음 컴포넌트가 mount되었을때만 실행된다.

```jsx
//bad
const [todos, setTodos] = useState(readTodosFromLocalStorage());
//cooooooooooooool
const [todos, setTodos] = useState(readTodosFromLocalStorage);
//coool - 불필요한 함수가 만들어진다는 단점
const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
```
