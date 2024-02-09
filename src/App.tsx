//CSS modules
import styles from './App.module.css';

//Components
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
      <div>
        <Header />
        <main className={styles.main}>

        </main>
        <Footer />
        
      </div>
  )
}

export default App
