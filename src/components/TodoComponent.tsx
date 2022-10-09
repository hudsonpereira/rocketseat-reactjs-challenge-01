import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";
import { Todo } from "../models/todo";
import CustomCheckBox from "./CustomCheckbox";
import style from "./todo.module.css";

interface TodoComponentProps {
  todo: Todo;
  onChange: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

function TodoComponent({ todo, onChange, onDelete }: TodoComponentProps) {
  const handleCheckboxChanged = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...todo,
      done: event.target.checked,
    });
  };

  const handleDeleteTodo = () => {
    onDelete(todo);
  };

  return (
    <div className={style.todo}>
      <div>
        <CustomCheckBox onChange={handleCheckboxChanged} checked={todo.done} />
      </div>
      <div className={todo.done ? style.todoDone : ""}>{todo.description}</div>
      <div>
        <button className={style.deleteButton} onClick={handleDeleteTodo}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}

export default TodoComponent;
