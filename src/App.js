import styled from 'styled-components'
import Peoples from './people'
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
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: #0A1121;
  background-image: url(https://us.123rf.com/450wm/lisaalisaill/lisaalisaill1801/lisaalisaill180100074/93164954-starry-sky-seamless-pattern-dots-in-galaxy-and-stars-style-endless-background-galaxy-background-of-s.jpg?ver=6);
`

const Header = styled.section`
  padding: 16px 25px;
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 6px #00000029;
`

const Content = styled.div`
  padding: 32px
`
