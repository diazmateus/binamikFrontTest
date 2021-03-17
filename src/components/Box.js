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
  width: calc((100% / 5) - 16px);
  margin: 8px;

  @media (max-width: 1023px) {
    width: calc((100% / 3) - 16px);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`
