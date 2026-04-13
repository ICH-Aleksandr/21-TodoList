import "./App.css";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
