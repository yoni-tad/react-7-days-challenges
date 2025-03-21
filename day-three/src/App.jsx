import React, { useState } from "react";
import TodoCard from "./components/TodoCard";
import ProgressCard from "./components/ProgressCard";
import CompletedCard from "./components/CompletedCard";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [task, setTask] = useState([
    {
      id: uuidv4(),
      name: "Build UI",
      status: "To do",
    },
    {
      id: uuidv4(),
      name: "Connect API",
      status: "In progress",
    },
    {
      id: uuidv4(),
      name: "Update API endpoint",
      status: "In progress",
    },
    {
      id: uuidv4(),
      name: "Check auth API",
      status: "In progress",
    },
    {
      id: uuidv4(),
      name: "Create new project",
      status: "Completed",
    },
  ]);
  // console.log(task)

  function handleOnDrag(event, id, name, status) {
    const data = JSON.stringify({ id, name, status });
    event.dataTransfer.setData("taskData", data);
    // setTask((prevData) => prevData.filter((item) => item.id !== id))
  }

  function handleOnDragOver(event) {
    event.preventDefault();
  }

  function handleOnDrop(event, newStatus) {
    const rowData = event.dataTransfer.getData("taskData");
    const data = JSON.parse(rowData);
    if (data) {
      setTask((prevData) =>
        prevData.map((task) =>
          task.id === data.id ? { ...task, status: newStatus } : task
        )
      );
    } else {
      setTask([data]);
    }
  }

  return (
    <main>
      <div className="flex flex-col gap-2 p-4" id="todos">
        <div className="mb-8">
          <p className="text-2xl font-bold">Drag-and-Drop Task Manager</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <TodoCard
            task={task}
            handleOnDrag={handleOnDrag}
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
          />
          <ProgressCard
            task={task}
            handleOnDrag={handleOnDrag}
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
          />
          <CompletedCard
            task={task}
            handleOnDrag={handleOnDrag}
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
          />
        </div>
      </div>
    </main>
  );
}
