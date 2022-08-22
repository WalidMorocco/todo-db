import useDelete from "../hooks/useDelete";
import { Todo } from "../types/Todo";

// Create the DeleteTodo component
const DeleteTodo  = (id: any) => {
    
    const { deleteRequest }  = useDelete('http://localhost:3004/todos/');
    
    const deleteTodo = async (id:any) => {
        // here is the function from the usePost hook
        await deleteRequest({
          id: id,
          task: "",
          isCompleted: false
     });
    }
 
    const clickHandler = (todo:Todo) => {
        return (event: React.MouseEvent) => {
            deleteTodo(todo.id);       
            event.preventDefault();
        }
    }

    return (
        <div>
            <button  id="deleteButton"
                aria-label="Delete a todo"
                className="h-7 w-7 flex justify-center items-center bg-gray-700 hover:bg-gray-800 text-white font-bold rounded"
                onClick={clickHandler(id)}
            >
                X
            </button>
        </div>
    )
}

export default DeleteTodo;