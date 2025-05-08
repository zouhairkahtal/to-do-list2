import remove from "./remove.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [addtask, setAddask] = useState("");

  const addNewTask = () => {
    if (addtask.trim() === "") return;
    setTask([...task, addtask]);
    setAddask("");
  };
  const removetask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-slate-800">
      <div className=" bg-blue-200 p-5 rounded-md ">
        <div className="text-gray-600 text-lg font-bold w-96 flex justify-between pb-5">
          <h1 className="text-center">To Do List</h1>

          <button onClick={addNewTask} >add</button>
        </div>
        <div>
          <input
            placeholder="what needs to be done?"
            value={addtask}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addNewTask();
              }
            }}
            onChange={(e) => setAddask(e.target.value)}
            type="text"
            className="w-96 h-10 border-solid border-2 border-sky-500 pl-2 mb-2 rounded-lg"
            maxLength={46}
          ></input>
        </div>
        <div>
          <ul className="mb-5">
            {task.map((task, index) => (
              <li className="flex justify-between items-center w-96 mb-2" key={index}>
                <div className=" text-blue-900 ">

                <span className="mr-2">{index+1+"."}</span>{task}
                </div>
                
                <button className="" onClick={() => removetask(index)}
                  >
                    <img className="w-5" src={remove} alt="removeLogo" />
                  </button>
              </li>
            ))}
          </ul>
          <div className="flex ">

          <h2 className="mr-5 text-gray-600 text-lg font-bold">
            {`${task.length} tasks`}
          </h2>
            <button className="bg-blue-400 px-2 hover:text-blue-50"
           onClick={() => setTask([])}
            >
              clear tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
