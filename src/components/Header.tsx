/**
 * Por padrão o typescript não permite que isto seja utilizado
 * Então é necessário realizar uma configuração antes de utilizar 
 * dessa forma (css modules)
 * 
 * Essa configuração se encontra no arquivo 'global.d.ts' localizado
 * em 'src/'
 */
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>React _ TS Todo</h1>
    </header>
  )
}

export default Header