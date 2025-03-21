import { ClipboardCheck, Trash, Plus } from "lucide-react";
import TaskItem from "./TaskItem";

export default function TodoCard(props) {
  return (
    <div
      className="flex flex-col w-full md:w-86 bg-gray-100 rounded-2xl p-4"
      onDragOver={props.onDragOver}
      onDrop={() => props.onDrop(event, "To do")}
    >
      <div className="flex gap-2 items-center mb-4">
        <ClipboardCheck size={24} className="text-pink-400" />
        <p className="font-bold text-xl">To do</p>
      </div>

      {props.task &&
        props.task
          .filter((item) => item.status === "To do")
          .map((item, index) => {
            return (
              <TaskItem
                key={index}
                taskName={item.name}
                handleOnDrag={(event) =>
                  props.handleOnDrag(event, item.id, item.name, item.status)
                }
              />
            );
          })}

      <div className="flex justify-center gap-2 mt-4 cursor-pointer">
        <Plus className="text-pink-400" />
        <p>Add task</p>
      </div>
    </div>
  );
}
