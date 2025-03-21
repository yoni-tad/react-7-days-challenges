import { CheckCheck, Plus } from "lucide-react";
import TaskItem from "./TaskItem";

export default function CompletedCard(props) {
  return (
    <div
      className="flex flex-col w-full md:w-86 bg-green-50 rounded-2xl p-4"
      onDragOver={props.onDragOver}
      onDrop={() => props.onDrop(event, "Completed")}
    >
      <div className="flex gap-2 items-center mb-4">
        <CheckCheck size={24} className="text-pink-400" />
        <p className="font-bold text-xl">Complete</p>
      </div>

      {props.task &&
        props.task
          .filter((item) => item.status === "Completed")
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
