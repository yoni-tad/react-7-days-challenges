export default function AddTask(props) {
    return <div className="flex my-6">
        <input type="text" name="task" ref={props.inputRef} placeholder="Add your task" className="flex-grow border h-12 px-8 rounded-s-full" />
        <button onClick={props.addTask} className="bg-gray-800 text-white h-12 w-25 rounded-e-full">Add</button>
    </div>
}