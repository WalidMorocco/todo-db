import { TodoList } from "../components/TodoList";
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


