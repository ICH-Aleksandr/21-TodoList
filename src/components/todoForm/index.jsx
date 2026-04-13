import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todosSlice";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;
