import style from "./main.module.css";
import { PlusCircle } from "phosphor-react";
import TodoComponent from "./TodoComponent";
import { Todo } from "../models/todo";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import EmptyState from "./EmptyState";

function Main() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleNewTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleCreateNewTodo = (event: FormEvent) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: uuidV4(),
        description: newTodo,
        done: false,
      },
    ]);

    setNewTodo("");
  };

  const handleTodoChanged = (changedTodo: Todo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === changedTodo.id) {
          return changedTodo;
        }

        return todo;
      })
    );
  };

  const handleTodoDeleted = (deletedTodo: Todo) => {
    setTodos(todos.filter((todo) => todo.id !== deletedTodo.id));
  };

  const doneTodos = todos.filter((todo) => todo.done).length;

  return (
    <main className={style.main}>
      <form>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button type="submit" onClick={handleCreateNewTodo}>
          <span>Criar</span>
          <PlusCircle size={15} />
        </button>
      </form>

      <div className={style.tasksWrapper}>
        <header>
          <div>
            <span className={style.createdTasksHeader}>Tarefas criadas</span>{" "}
            <span className={style.counter}>{todos.length}</span>
          </div>

          <div>
            Concluídas{" "}
            <span className={style.counter}>
              {doneTodos} de {todos.length}
            </span>
          </div>
        </header>
        <main className={style.mainTasks}>
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <TodoComponent
                  key={todo.id}
                  todo={todo}
                  onChange={handleTodoChanged}
                  onDelete={handleTodoDeleted}
                />
              );
            })
          ) : (
            <EmptyState />
          )}
        </main>
      </div>
    </main>
  );
}

export default Main;
