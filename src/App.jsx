
import Form from "./components/Form"
import { ToastContainer, toast } from "react-toastify";

import SingleTask from "./components/SingleTask";
import { useGlobalContext } from "./context/context";


function App() {
  const {tasks, isUpdateFormOpen} = useGlobalContext()


  return (
    <main className="h-[100vh] w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-10 px-4">
      <div className=" max-w-[800px] p-6 bg-white mx-auto rounded-xl shadow-md shadow-cyan-900">
        <div className="w-full flex flex-col items-center justify-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold pb-1">Todo-List</h1>
          <div className="w-28 rounded-xl  h-1 bg-sky-500" />
        </div>
        <Form />
        <div className="my-4">
          {tasks.map((task) => {
            const { id } = task
            return (
              <SingleTask key={id} {...task}  d />
            )
          })}
        </div>
        
        <ToastContainer position="top-center" />
      </div>
    </main>
  )
}

export default App
