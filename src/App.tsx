import { TodoList } from "./components/TodoList";
import { Todos } from "./components/Todos"

function App() {
  return (
    <div className="bg-gray-800 flex h-screen items-center justify-center">
      <TodoList />
    </div>
  );
}

export default App;
