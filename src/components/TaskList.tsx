//Interfaces
import { MdEdit } from "react-icons/md";
import { ITask } from "../interfaces/Task"

//CSS
import styles from './TaskList.module.css';
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  taskList: ITask[]
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {
        taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id}>
              <div>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div>
                <MdEdit />
                <FaRegTrashAlt />
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