//React
import { useState } from 'react';

//CSS modules
import styles from './App.module.css';

//Components
import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//Interfaces
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      //Retorna todos que tenham o id diferente do recebido
      taskList.filter(task => {
        return task.id !== id;
      })
    )
  }

  const hiderOrShowModal = (display: boolean): void => {
    const modal = document.querySelector('#modal');
    if(display){
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  }

  const editTask = (task: ITask): void => {
    hiderOrShowModal(true);
    setTaskToUpdate(task);
  }

  return (
      <div>
        <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate}/>}/> 
        <Header />
        <main className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div>
            <h2>Suas Tarefas:</h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} handleUpdate={editTask}/>
          </div>
        </main>
        <Footer />
        
      </div>
  )
}

export default App
