import { Container, Links } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details() {
  return (
    <Container>
      <Header />
      {/* <h1>Hello World!</h1>
      <span>Fabiano Santos</span> */}

      <Section title="Links úteis">
        <Links>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Links>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}
