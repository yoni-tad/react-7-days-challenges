import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [userData, setUserData] = useState([
    {
      id: uuid(),
      task: "Follow 7 day react challenge",
      isComplete: false,
    },
  ]);

  const inputRef = useRef();

  function addTask() {
    const task = inputRef.current.value;
    if (task) {
      setUserData((prevData) => {
        return [
          ...prevData,
          {
            id: uuid(),
            task,
            isComplete: false,
          },
        ];
      });
      inputRef.current.value = "";
    }
  }

  function updateTask(id) {
    setUserData((prevData) => {
      return prevData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isComplete: !data.isComplete,
          };
        }

        return data;
      });
    });
  }

  function deleteTask(id) {
    setUserData((prevData) => prevData.filter((data) => data.id !== id));
  }

  return (
    <main className="bg-white p-8 rounded-2xl mx-8 text-center">
      <Header />
      <AddTask inputRef={inputRef} addTask={addTask} />
      <TaskList
        userData={userData}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </main>
  );
}
