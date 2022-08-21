import React, { useState } from 'react';
import Loading from './Loading';
import usePost from '../hooks/usePost';
import { v4 as uuidv4 } from "uuid"
import { Todo } from '../types/Todo';

interface PostType {
    onClick?: React.MouseEventHandler<HTMLElement>,
    task: string
}
const PostingData = () => {
    const [task, setTask] = useState('');
    
    const { postRequest  }  = usePost('http://localhost:3004/posts')
    
    const submitForm = async ({ task, onClick }:PostType) => {
        console.log(task)
        // here is the function from the usePost hook
        await postRequest({
          id: uuidv4,
          task: task,
          isCompleted: false
     });
    }
 
    return (
        <div className="form">
            <h2>Add a New product</h2>
            <form>

                <div className="form-group">
                    <label className="form-label">Task: </label>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                

                <div className="form-group">
                    <button onClick={submitForm} className="button">
                        Submit
                    </button>
                </div>   

            </form>
        </div>
        
 
    )
};

export default PostingData;