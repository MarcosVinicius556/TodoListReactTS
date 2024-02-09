//Interfaces
import { ITask } from "../interfaces/Task"

//CSS
import styles from './TaskList.module.css';

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
              {task.title}
            </div>
          ))
        ) : (
          <p>Nenhuma tarefa cadastrada</p>
        )}
    </>
  )
}

export default TaskList