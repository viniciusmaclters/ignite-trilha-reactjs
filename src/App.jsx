import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Vinicius Maclters" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis quaerat in nisi. Totam, fuga molestiae labore iste tenetur nemo repellendus harum sequi sapiente, commodi vel quam deserunt, culpa iusto!"
      />
    </>
  )
}