import {Container} from "../../pages/Details/styles";

export function Section ({title, children}){
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}