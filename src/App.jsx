import "./App.css";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 16px" }}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
