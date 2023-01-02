import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
         author="Vinicius Maclters" 
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis quaerat in nisi. Totam, fuga molestiae labore iste tenetur nemo repellendus harum sequi sapiente, commodi vel quam deserunt, culpa iusto!"
        />

        <Post 
         author="Matheus Maclters" 
         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis quaerat in nisi. Totam, fuga molestiae labore iste tenetur nemo repellendus harum sequi sapiente, commodi vel quam deserunt, culpa iusto!"
        />
        </main>
      </div>
    </>
  )
}