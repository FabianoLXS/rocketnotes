import { Container } from "./styles"
import { Header } from "../../components/Button"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <Header />
      <h1>Hello World!</h1>
      <span>Fabiano Santos</span>

      <Button title="Voltar" />
    </Container>
  )
}
