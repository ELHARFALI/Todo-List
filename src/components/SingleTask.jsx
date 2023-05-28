import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { useState } from 'react'
import { useGlobalContext } from '../context/context'

const SingleTask = ({ id, name, completed }) => {
  const {deleteTask, handleEditTask, handleComplete} = useGlobalContext()
    

  return (
    <article key={id} className="p-2 bg-[#91D8E4] rounded-md flex items-center justify-between mb-2">
        <div className="flex items-center gap-5">
            <input type="checkbox" checked={completed} onChange={() => handleComplete(id)}  />
            <h3 className="text-lg md:text-xl font-medium capitalize">
            {completed ? <s>{name}</s> : name}
            </h3>
        </div>
        <div className="flex gap-2 items-center">
            <button type="button" onClick={() => handleEditTask(id)} className="bg-sky-600 text-white p-1 rounded-md transition-all ease-in-out duration-150 hover:bg-sky-800">
            <BiEdit size={25} />
        </button>
            <button type="button" onClick={() => deleteTask(id)} className="bg-red-400 text-white p-1 rounded-md transition-all ease-in-out duration-150 hover:bg-red-600">
            <AiFillDelete size={25} />
            </button>
        </div>
    </article>
  )
}

export default SingleTask