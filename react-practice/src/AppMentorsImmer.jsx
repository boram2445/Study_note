import React from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleEdit = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const curr = prompt("이름을 무엇으로 바꾸고 싶은가요?");
    //useImmer에서 새로운 객체를 만들기 때문에 기존의 값을 복사할 필요는 없구나!
    //로직에서 그냥 필요한 값만 변경해 주면 된다.
    updatePerson((person) => {
      const mentor = person.mentors.find((mentor) => mentor.name === prev);
      mentor.name = curr;
    });
  };
  const handleAdd = () => {
    const name = prompt("추하할 멘토의 이름을 입력해주세요");
    const title = prompt("차가할 멘토의 직함을 알려주세요");
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    const name = prompt("삭제할 멘토의 이름을 입력해주세요");
    updatePerson((person) => {
      const index = person.mentors.findIndex((mentor) => mentor.name === name);
      if (index === -1) return;
      person.mentors.splice(index, 1);
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} {mentor.title}
          </li>
        ))}
      </ul>
      <button onClick={handleEdit}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
