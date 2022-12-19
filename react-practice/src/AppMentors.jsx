import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleEdit = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");
    const newMentors = person.mentors.map((mentor) => {
      if (mentor.name === prev) {
        return { ...mentor, name: current };
      }
      return mentor;
    });
    setPerson((person) => ({ ...person, mentors: newMentors }));
  };

  const handleAdd = () => {
    const name = prompt("추하할 멘토의 이름을 입력해주세요");
    const title = prompt("차가할 멘토의 직함을 알려주세요");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };

  const handleDelete = () => {
    const name = prompt("삭제할 멘토의 이름을 입력해주세요");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
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
