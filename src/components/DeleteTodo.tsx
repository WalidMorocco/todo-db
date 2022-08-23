import useDelete from "../hooks/useDelete";
import { Todo } from "../types/Todo";
import { motion } from "framer-motion";

// Create the DeleteTodo component
const DeleteTodo  = (id: any) => {
    
    const { error, deleteRequest }  = useDelete('http://localhost:3004/todos/');

    if (error) {
        return <p>There was an error</p>;
    }

    const deleteTodo = async (id:any) => {
        // here is the function from the usePost hook
        await deleteRequest({
          id: id,
          task: "",
          isCompleted: false
        });
        window.location.reload();
    }
 
    const clickHandler = (todo:Todo) => {
        return (event: React.MouseEvent) => {
            deleteTodo(todo.id);       
            event.preventDefault();
        }
    }

    return (
        <motion.div whileTap={{ scale: 1.3 }}>
            <button  id="deleteButton"
                aria-label="Delete a todo"
                className="h-6 w-6 justify-center items-center bg-gray-700 hover:bg-gray-800 text-white font-bold rounded"
                onClick={clickHandler(id)}
            >
                X
            </button>
        </motion.div>
    )
}

export default DeleteTodo;