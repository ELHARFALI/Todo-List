import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import {toast} from 'react-toastify'

const AppContext = createContext()


export const ContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const handleEditTask = (taskId) => {
        const taskToUpdate = tasks.find((task) => task.id === taskId);
        if (taskToUpdate) {
            const updatedName = prompt('Enter the updated name:', taskToUpdate.name);
            if (updatedName !== null) {
              const updatedTasks = tasks.map((task) =>
                task.id === taskId ? { ...task, name: updatedName } : task
              );
              setTasks(updatedTasks);
            }
          }
    }


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
    
    // handleComplete
    const handleComplete = (id) => {
        const updateTasks = tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
        setTasks(updateTasks)
      }

    
  
  

  

  
    
    return (
        <AppContext.Provider value={{tasks, addNewTask, deleteTask, handleComplete, handleEditTask}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}