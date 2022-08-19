import { ChangeEvent, FormEvent, useState } from "react"
import {Card} from "./Card"
import { data } from "../todos"
import { AddTodo } from "./AddTodo";
import { v4 as uuidv4 } from "uuid"

// Create type here to manipulate the todos (delete) and use useState
type Todo = {
    id: string;
    task: string;
    isCompleted: boolean;
}

// Create Todos component to link the data in todos.ts to the Row component
export const Todos = () => {
    
    // Declare variables
    const [todos, setTodos] = useState<Todo[]>(data); // Todos in array todos of type Todo
    const [task, setTask] = useState(""); // Task input
    const todosLength = todos.length; // Length of todos array (number of data in todos.ts)
    const hasTodos = todos.length > 0; // Means true if todos.length > 0
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length; // Filter out the non completed todos and get the length

    // Function add new todo to the todos and reset the input
    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo]; // Update the new todo by spreading old todos and add added todo 
        setTodos(updatedTodos); // Add to todos 
        setTask(""); // Reset input
    }

    // Function to give the task input value whatever is written (like useEffect())
    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setTask(value); // Inputed value in AddTodo component
    }

    // Function to add the new todo to todos from the task value given by handleChange
    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault();

        // Structure the new todo by creating new id, assigning the input value of task and isComplete false by default
        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false
        }
        task && handleAddTodo(todo); // If there is a value of task add the todo to todos
    }

    // Todo taking the value from the delete function
    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id); // Updated todos filter out the chosen todo to delete
        setTodos(updatedTodos); // Todos become the updated todos without the filtered out todo
    }

    // Todo taking the value from the check function (update the isCompleted value)
    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => { // Return all the todos
            if (todo.id === id) { // Pick the todo with the same id clicked
                return{
                    ... todo, // ... spread the todo array to keep same value
                    isCompleted: !todo.isCompleted, // change value of isCompleted
                }
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div className="w-80 h-80">
            <section >

                {/* Add a todo with task value input and given with setTask from handleChange function */}
                <AddTodo 
                    task={task} // From the export type AddTodoProps takes value of the task input
                    handleChange={handleChange} 
                    handleSubmitTodo={handleSubmitTodo}
                />

                {/* Map the array of data in todos.ts by taking todo:Todo as a type (id, task, isChanged) */}
                {todos.map((todo) => ( 
                    // Render a row for each todo data (todos.ts)
                    <Card 
                        key={todo.id} 
                        todo={todo}
                        handleDeleteTodo={handleDeleteTodo} 
                        handleCheckTodo={handleCheckTodo}
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