import logo from "./logo.svg";
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
      <div className=" bg-blue-200 p-5 rounded-md">
        <div className="text-gray-600 text-lg font-bold w-96 flex justify-between pb-5">
          <h1 className="text-center">To Do List</h1>

          <button onClick={addNewTask}>add</button>
        </div>
        <div>
          <input
            placeholder="what needs to be done?"
            value={addtask}
            onChange={(e) => setAddask(e.target.value)}
            type="text"
            className="w-96 h-10 border-solid border-2 border-sky-500 pl-2 mb-2 rounded-lg"
          ></input>
        </div>
        <div>
          <ul>
            {task.map((task, index) => (
              <li className="flex justify-between w-96" key={index}>
                <div>

                <span className="mr-2">{index+1+"."}</span>{task}
                </div>
                
                <button onClick={() => removetask(index)}
                  >
                    <img className="w-5" src={remove} alt="removeLogo" />
                  </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
