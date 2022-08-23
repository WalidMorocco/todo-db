import { Todo } from "../types/Todo"
import CompleteTodo from "./CompleteTodo"
import DeleteTodo from "./DeleteTodo"
import { motion } from "framer-motion";


// Create TodoProp to use props with our Todo type
type TodoProps = {
    // todo property type Todo
    todo: Todo
}

// Create the Row component
export const Card = ({
    todo: {task, isCompleted, id }
}: TodoProps) => (

    <motion.div  key={"my_unique_key"}
    exit={{ opacity:0 }}
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ type: "spring" }}
    className={`
        flex w-full p-4 mb-2 rounded-3xl shadow hover:bg-purple-700
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
            className="flex space-x-1 pl-10"
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
    </motion.div>
)