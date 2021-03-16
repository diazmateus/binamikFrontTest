import styled from 'styled-components'
import Peoples from './scenes/people'
import { Logo } from './components/Logo'
import { LogoStarWars } from './components/LogoStarWars'

function App() {
  return (
    <Page>

      <Header>
        <LogoStarWars/>
      </Header>

      <Content>
        <Peoples/>
      </Content>


    </Page>
  )
}

export default App

const Page = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background-image: url(https://cdn.imgpaste.net/2020/11/26/Otr0s.jpg);
  background-size: contain;
  background-color: black;
`

const Header = styled.section`
  padding: 16px 25px;
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 6px #00000029;
`

const Content = styled.div`
  padding: 120px
`
