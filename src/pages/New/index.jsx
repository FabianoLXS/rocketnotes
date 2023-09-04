import {Container} from "./styles"
import {Header} from "../../components/Header"

export function New(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>
        </Form>
      </main>
    </Container>
  )
}