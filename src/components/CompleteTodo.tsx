import useUpdate from "../hooks/useUpdate";
import { Todo } from "../types/Todo";
import Spinner from "./Spinner";

// Create the DeleteTodo component
const CompleteTodo  = (todo: Todo) => {
    
    const { loading, error, updateRequest  }  = useUpdate('http://localhost:3004/todos/')
 
    if (loading) {
        return (
        <div >
            <input id="checkbox"
                type="checkbox" 
                checked={todo.isCompleted} 
                className="w-5 h-5 rounded-3xl animate-ping "
            />
        </div>
    )};

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
        <div >
            <input id="checkbox"
                type="checkbox" 
                checked={todo.isCompleted} 
                className="w-5 h-5 rounded-3xl"
                onChange={clickHandler(todo)} 
            />
        </div>
        
    )
}

export default CompleteTodo;