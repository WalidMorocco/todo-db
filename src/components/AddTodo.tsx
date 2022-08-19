import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { ChangeEvent, FormEvent }  from 'react'

// Export to get give task in Todo component
type AddTodoProps = {
    task: string; // Task title
    handleSubmitTodo: (e: FormEvent) => void; // Function add task, return the new todo
    handleChange: (e: ChangeEvent) => void; // Function get changes on the input, set task title
}

export const AddTodo = ({
    task,
    handleSubmitTodo,
    handleChange,
}: AddTodoProps) => (

    <div className="">
        <form onSubmit={handleSubmitTodo} className="form space-y-6 py-4">

            <input id="addTodoTextField"
                type="text" 
                name="task" 
                value={task} 
                placeholder="Add a task." 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-violet-500 focus:ring-violet-500 focus:ring-1 sm:text-sm"
                onChange={handleChange} 
            />

            <button id="addTodoButton"
                type="submit" 
                aria-label="Add todo"   
            >
                <PlusIcon className="h-7 w-7 animate-bounce"/>
            </button>

        </form>
    </div>
    

)