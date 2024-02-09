//Interfaces
import { MdEdit } from "react-icons/md";
import { ITask } from "../interfaces/Task"

//CSS
import styles from './TaskList.module.css';
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
}

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {
        taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <MdEdit />
                <FaRegTrashAlt onClick={() => handleDelete(task.id)}/>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma tarefa cadastrada</p>
        )}
    </>
  )
}

export default TaskList