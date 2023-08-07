import { Container } from "./styles"

export function Button(props) {
  // eslint-disable-next-line react/prop-types
  return <Container type="button">{props.title}</Container>
};
