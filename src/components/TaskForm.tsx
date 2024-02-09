//react
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

//CSS
import styles from './TaskForm.module.css';

//Interfaces
import { ITask } from '../interfaces/Task';

interface Props {
  btnText: string
}

const TaskForm = ({ btnText }: Props) => {

  const[id, setId] = useState<number>(0);
  const[title, setTitle] = useState<string>('');
  const[difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {

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

      console.log(title);
      console.log(difficulty);
  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Título: </label>
          <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange}/>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="difficulty">Dificuldade: </label>
          <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange}/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm