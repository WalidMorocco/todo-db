import { Todo } from "../types/Todo"
import CompleteTodo from "./CompleteTodo"
import DeleteTodo from "./DeleteTodo"


// Create TodoProp to use props with our Todo type
type TodoProps = {
    // todo property type Todo
    todo: Todo
}

// Create the Row component
export const Card = ({
    todo: {task, isCompleted, id }
}: TodoProps) => (

    <div className={`
        flex w-full p-4 mb-2 items-center rounded-3xl shadow
        ${isCompleted ?  "bg-purple-800" : "bg-purple-600 "}  `}
    >

        <div className="w-40">

            <p id="todoTitle"
                className={`
                    ml-2 text-xl font-sans font-medium
                    ${isCompleted ? "text-white line-through" : "text-white"}
                `}
            >{task}</p>

            <p>{isCompleted}</p>

        </div>
        

        <div id="selection"
            className="w-1/6 flex space-x-1 items-center pl-7"
        >

            <CompleteTodo
                id={id}
                task={task}
                isCompleted={isCompleted}
            />

            <DeleteTodo
            id = {id}
            task = {task}
            isCompleted={isCompleted}/>
            
        </div>
    </div>
)