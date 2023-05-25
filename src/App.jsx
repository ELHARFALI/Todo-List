import { useState } from "react"
import Form from "./components/Form"
import { nanoid } from "nanoid"
import { ToastContainer, toast } from "react-toastify";
import {AiFillDelete} from 'react-icons/ai'


function App() {
  const [tasks, setTasks] = useState([])


  // add new task
  const addNewTask = (taskName) => {
    const newTask = {
      name: taskName,
      id: nanoid(),
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    toast.success('The Task Is Removed')
    setTasks(newTasks)
  }

  // change completed boolean in a specific task
  const handleChange = (id) => {
    const updateTask = tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
    setTasks(updateTask)
  }


  return (
    <main className="h-[100vh] w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-10 px-4">
      <div className=" max-w-[800px] p-6 bg-white mx-auto rounded-xl shadow-md shadow-cyan-900">
        <div className="w-full flex flex-col items-center justify-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold pb-1">Todo-List</h1>
          <div className="w-28 rounded-xl  h-1 bg-sky-500" />
        </div>
        <Form addNewTask={addNewTask} tasks={tasks} />
        <div className="my-4">
          {tasks.map((task) => {
            const { name, id, completed } = task
            return (
              <article key={id} className="p-2 bg-[#91D8E4] rounded-md flex items-center justify-between mb-2">
                <div className="flex items-center gap-5">
                  <input type="checkbox" checked={completed} onChange={() => handleChange(id)}  />
                  <h3 className="text-lg md:text-xl font-medium capitalize">
                    {completed ? <s>{name}</s> : name}
                  </h3>
                </div>
                <button type="button" onClick={() => deleteTask(id)} className="bg-red-400 text-white p-1 rounded-md transition-all ease-in-out duration-150 hover:bg-red-600">
                  <AiFillDelete size={25} />
                </button>
              </article>
            )
          })}
        </div>
        <ToastContainer position="top-center" />
      </div>
    </main>
  )
}

export default App
