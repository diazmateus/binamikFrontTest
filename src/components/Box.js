import styled from 'styled-components'

export default function Box({children, hairColor}) {


  return (
    <Container hairColor={hairColor}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.19);
  //border-top: 4px solid #63AA43;
  width: calc((100% / 3) - 16px);
  margin: 8px;
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
  }
`
