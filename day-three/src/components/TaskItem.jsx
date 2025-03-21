import { Trash } from "lucide-react";

export default function TaskItem(props) {
  return (
    <div className="flex-grow mb-4" draggable onDragStart={(event) => props.handleOnDrag(event)}>
      <div className="flex items-center py-2 px-4 bg-gray-200 rounded-lg">
        <p className="flex-grow">{props.taskName}</p>
        <Trash size={20} className="cursor-pointer" />
      </div>
    </div>
  );
}
