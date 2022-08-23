import useUpdate from "../hooks/useUpdate";
import { Todo } from "../types/Todo";
import { motion } from "framer-motion";

// Create the DeleteTodo component
const CompleteTodo  = (todo: Todo) => {
    
    const { error, updateRequest  }  = useUpdate('http://localhost:3004/todos/')
 
    if (error) {
        return <p>There was an error</p>;
    }
    
    const updateTodo = async ({id, task, isCompleted}:Todo) => {
        // here is the function from the usePost hook
        await updateRequest({
          id: id,
          task: task,
          isCompleted: !isCompleted
        });
        console.log(isCompleted)
        window.location.reload();
    }
 
    const clickHandler = (todo:Todo) => {
        return (event: React.ChangeEvent) => {
            updateTodo(todo);       
            event.preventDefault();
        }
    }

    return (
        <motion.div whileTap={{ scale: 1.3 }}>
            <input id="checkbox"
                type="checkbox" 
                checked={todo.isCompleted} 
                className="w-6 h-6"
                onChange={clickHandler(todo)} 
            />
        </motion.div>
        
    )
}

export default CompleteTodo;