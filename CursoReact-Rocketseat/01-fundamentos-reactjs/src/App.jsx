import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from './components/Sidebar'
import "./global.css"
import styles from './App.module.css'

export function App() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      <Post
        author="Yuri"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse fugiat maiores consectetur accusantium in, unde neque nulla provident reiciendis corrupti a deserunt molestiae culpa laboriosam, dolores perspiciatis commodi amet odio"
      />
      </main>
    </div>
    </>
  )
}
