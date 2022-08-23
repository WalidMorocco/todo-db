import { TodoList } from "../components/TodoList";
import PostTodo from "../components/PostTodo";
import '../styles/HomePage.css';


export default function HomePage() {


  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="flex items-center justify-center  space-x-10 h-4/6 w-4/6 shadow-2xl shadow-purple-600 border border-purple-600">
        <div id="content1" className="flex items-center justify-center  space-x-10 h-full w-full shadow-inner">

          <div>
            <PostTodo/>
          </div>

          <div  className="overflow-y-auto h-full w-80 ">
            <TodoList/>
          </div>
          
        </div> 
      </div>
    </div>
  );
}


