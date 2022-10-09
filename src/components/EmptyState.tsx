import { Clipboard } from "phosphor-react";
import style from "./empty-state.module.css";

function EmptyState() {
  return (
    <div className={style.emptyState}>
      <Clipboard size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

export default EmptyState;
