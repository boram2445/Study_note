## 배운점 📚

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

```
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
