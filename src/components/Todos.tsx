import { ChangeEvent, FormEvent, useState } from "react"
import {Card} from "./Card"
import { data } from "../todos"
import { AddTodo } from "./AddTodo";
import { v4 as uuidv4 } from "uuid"
import useFetchTodos from "../hooks/useFetchTodos";
import { Todo } from "../types/Todo";



// Create Todos component to link the data in todos.ts to the Row component
export const Todos = () => {
    
    // Declare variables
    const dataTodos = useFetchTodos().data;
    const [todos, setTodos] = useState<Todo[]>(dataTodos);
    // const [todos, setTodos] = useState<Todo[]>(data); // Todos in array todos of type Todo
    const [task, setTask] = useState(""); // Task input
    const todosLength = todos.length; // Length of todos array (number of data in todos.ts)
    const hasTodos = todos.length > 0; // Means true if todos.length > 0
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length; // Filter out the non completed todos and get the length
    
    console.log(todos);



    return (
        <div className="w-80 h-80">
            <section >

                {/* Add a todo with task value input and given with setTask from handleChange function */}
                <AddTodo 
                    task={task} // From the export type AddTodoProps takes value of the task input
                    handleChange={() => {}} 
                    handleSubmitTodo={() => {}}
                />

                {/* Map the array of data in todos.ts by taking todo:Todo as a type (id, task, isChanged) */}
                {todos.map((todo) => ( 
                    // Render a row for each todo data (todos.ts)
                    <Card 
                        key={todo.id} 
                        todo={todo}
                        handleDeleteTodo={() => {}} 
                        handleCheckTodo={() => {}}
                    />
                ))}

                <div className="text-gray-200">
                    {/* A ternary operator. If hasTodos true, displays the todos remaining */}
                    {hasTodos && (
                        <p>
                            {remainingTodos} of {todosLength} todos remaining
                        </p>
                    )}
                </div>
                

            </section>
        </div>
        
    )
}