import {Container} from './styles'

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/fabianolxs.png" alt="" />
        <div>
          <span>Bem-vindo</span>
          <strong>Fabiano Xavier</strong>
          </div>
      </Profile>
    </Container>
  )
}