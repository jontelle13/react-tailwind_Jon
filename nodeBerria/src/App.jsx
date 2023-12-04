import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { Article } from "./components/Article"
import { Notiziak } from "./components/Notiziak"

function App() {

  return (
    <>
     <Header />
     <div class="lg:flex">
     <Container />
     <Article />
     </div>
     <Notiziak />

    </>
  )
}

export default App
