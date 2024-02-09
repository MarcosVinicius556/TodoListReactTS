//react
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

//CSS
import styles from './TaskForm.module.css';

//Interfaces
import { ITask } from '../interfaces/Task';

interface Props {
  btnText: string;
  taskList: ITask[];
  task?: ITask | null;
  //Tipando uma função do tipo setter do react...
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {

  const[id, setId] = useState<number>(0);
  const[title, setTitle] = useState<string>('');
  const[difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if(task){
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  //Tipando o evento recebido
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = {id, title, difficulty};

      /**
       * Como o typescript não sabe se irá vir ou não uma lista, forçamos com '!'
       * desta forma ele libera para podermos manipular a lista neste componente
       */
      setTaskList!([...taskList, newTask]);

      setTitle('');
      setDifficulty(0);
      console.log(taskList);
  }

  /**
   * Com o TS para consumir da forma correta o evento, é necessário tipar ele
   * da forma correta, para assim o TS conseguir nos auxiliar...
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if(e.target.name === 'title') {
        setTitle(e.target.value);
      } else {
        setDifficulty(parseInt(e.target.value));
      }
  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Título: </label>
          <input 
            type="text" 
            name="title" 
            placeholder="Título da tarefa" 
            onChange={handleChange} 
            value={title}/>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="difficulty">Dificuldade: </label>
          <input 
            type="text" 
            name="difficulty" 
            placeholder="Dificuldade da tarefa" 
            onChange={handleChange} 
            value={difficulty}/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm