import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import React, { useState } from 'react';
import usePost from '../hooks/usePost';
import { v4 as uuidv4 } from "uuid"


const PostingData = () => {
    const [task, setTask] = useState('');
    
    const { postRequest  }  = usePost('http://localhost:3004/todos')
    
    const submitForm = async (task:string) => {
        console.log(task)
        // here is the function from the usePost hook
        await postRequest({
          id: uuidv4,
          task: task,
          isCompleted: false
     });
    }
 
    const clickHandler = (task:string) => {
        return (event: React.MouseEvent) => {
            submitForm(task);
            event.preventDefault();
        }
    }
        
    return (
        <div className="">
            <form className="form space-y-6 py-4">

                <div className="form-group">
                    <input
                        type="text"
                        value={task}
                        placeholder="Add a task." 
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1 sm:text-sm"
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                
                <div className="form-group">
                    <button onClick={clickHandler(task)} aria-label="Add todo">
                        <PlusIcon className="h-7 w-7 animate-bounce"/>
                    </button>
                </div>   
            </form>
        </div>

    )
};

export default PostingData;