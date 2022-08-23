import {Card} from "./Card"
import useFetchTodos from "../hooks/useFetchTodos";
import Spinner from "./Spinner";
import { AnimatePresence } from "framer-motion"

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
        <div className="h-full flex items-center border border-red-600">
            <div className="max-h-full shadow-inner border" >
                <div className="break-words space-y-2">
                    {/* Map the array of data in todos.ts by taking todo:Todo as a type (id, task, isChanged) */}
                    {todos.map((todo) => ( 
                    // Render a row for each todo data (todos.ts)
                    <AnimatePresence key={todo.id} mode='wait'>
                        <Card 
                        key={todo.id} 
                        todo={todo} 

                        />
                    </AnimatePresence>
                    
                    ))}
                </div>
            </div>
        </div>
        
    )
}