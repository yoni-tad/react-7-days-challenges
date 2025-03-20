import { CircleCheck, Trash2 } from "lucide-react";

export default function TaskList(props) {
  return (
    <>
    {props.userData.length === 0 && "No task available"}
      {props.userData.map((data) => (
        <div key={data.id} className="flex justify-between items-center my-4">
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => props.updateTask(data.id)}
          >
            {data.isComplete ? (
              <CircleCheck size={28} fill="#000" color="#fff" />
            ) : (
              <CircleCheck size={28} />
            )}
            <p className={data.isComplete ? "line-through" : ""}>{data.task}</p>
          </div>
          <Trash2 onClick={() => props.deleteTask(data.id)}/>
        </div>
      ))}
    </>
  );
}
