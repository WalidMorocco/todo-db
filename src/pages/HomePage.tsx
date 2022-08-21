import { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { Todo } from "../types/Todo";
import { v4 as uuidv4 } from "uuid"
// import usePostTodo from "../hooks/usePostTodo";
import usePost from "../hooks/usePost";
import PostTodo from "../components/PostTodo";


export default function HomePage() {


  return (
    <div>
      <div>
        <PostTodo />
      </div>
      
      <div>
        <TodoList />
      </div>
    </div>
    
  );
}


