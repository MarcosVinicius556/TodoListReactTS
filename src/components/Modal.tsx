import styles from './Modal.module.css';

interface Props {
    /**Recebemos um conteúdo, porém, não sabemos o que ele é, apenas o renderizamos na tela */
    children: React.ReactNode
}

const Modal = ({ children }: Props) => {
  return (
    <div id="modal">
        <div className={styles.fade}></div>
        <div className={styles.modal}>
            <h2>texto modal</h2>
            {children} 
        </div>
    </div>
  )
}

export default Modal