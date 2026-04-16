import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todosSlice";
import styles from "./styles.module.css";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          text: text,
          completed: false,
        }),
      );

      setText("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
      />
      <button className={styles.button} type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
