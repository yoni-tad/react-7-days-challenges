import { BookCheck } from "lucide-react";

export default function Header() {
  return (
    <div className="flex gap-4">
      <BookCheck size={32}/>
      <p className="text-2xl font-bold">Task List</p>
    </div>
  );
}
