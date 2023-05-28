import { useRef, useEffect, useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai'

import {toast} from 'react-toastify'
import { useGlobalContext } from "../context/context"

const Form = () => {
    const {tasks, addNewTask} = useGlobalContext()
    const inputRef = useRef(null)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue) {
            if (tasks.find((task) => task.name === inputValue)) {
                toast.warning('Task Already Exists!')
                return;
            }
            toast.success('The task has been added successfully')
            addNewTask(inputValue)
            inputRef.current.value = '' //Clear the input value
        }
        
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
      <form onSubmit={handleSubmit} className='w-full h-full'>
          <div className='flex h-full w-full'>
              <input type="text" ref={inputRef} onChange={handleChange} className='w-full   rounded-tl-md rounded-bl-md focus:outline-none px-2 py-1 bg-sky-200 text-xl' placeholder="Add a Task..."  />
              <button type='submit' className='py-2 px-4 bg-blue-600 transition-all ease-in-out duration-150 hover:bg-blue-500 rounded-tr-md rounded-br-md'>
                  <AiOutlineSearch size={25} />
              </button>
          </div>
    </form>
  )
}

export default Form 