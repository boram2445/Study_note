import React, { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function App() {
  const filters = ["All", "Active", "Completed"];
  const modes = ["day", "night"];
  const [filter, setFilter] = useState(filters[0]);
  const [mode, setMode] = useState(modes[0]);

  return (
    <DarkModeProvider>
      {/* 꼭 setSate함수를 다른 함수로 감싸서 전달하지 않아도 되는군 */}
      <Header
        filters={filters}
        filter={filter}
        onChangeFilter={setFilter}
        mode={mode}
        onChangeMode={setMode}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
