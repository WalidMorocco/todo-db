import {Card} from "./Card"
import useFetchTodos from "../hooks/useFetchTodos";
import Spinner from "./Spinner";


// Create Todos component to link the data in todos.ts to the Row component
export const TodoList = () => {
    
    // Declare variables
    const {data: todos, loading, error} = useFetchTodos();

    if (loading) {
        return (
        <Spinner/>
    )};

    if (error) {
        return <p>There was an error</p>;
    }

    return (
        <div>
            {/* Map the array of data in todos.ts by taking todo:Todo as a type (id, task, isChanged) */}
            {todos.map((todo) => ( 
                // Render a row for each todo data (todos.ts)
                <Card 
                    key={todo.id} 
                    todo={todo} 

                />
            ))}
        </div>
    )
}