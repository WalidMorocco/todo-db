import { ChangeEvent, FormEvent, useState } from "react"
import {Card} from "./Card"
import { data } from "../todos"
import { AddTodo } from "./AddTodo";
import { v4 as uuidv4 } from "uuid"
import useFetchTodos from "../hooks/useFetchTodos";
import { Todo } from "../types/Todo";



// Create Todos component to link the data in todos.ts to the Row component
export const TodoList = () => {
    
    // Declare variables
    const dataTodos = useFetchTodos().data;

    return (
        <div>
            {/* Map the array of data in todos.ts by taking todo:Todo as a type (id, task, isChanged) */}
            {dataTodos.map((todo) => ( 
                // Render a row for each todo data (todos.ts)
                <Card 
                    key={todo.id} 
                    todo={todo}
                    handleDeleteTodo={() => {}} 
                    handleCheckTodo={() => {}}
                />
            ))}
        </div>
    )
}