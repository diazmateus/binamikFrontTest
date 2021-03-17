import Box from './Box'
import styled from 'styled-components'

export const PeopleItem = (people = {}, index) => {
  const splitId = people.url.replace('http://swapi.dev/api/people/', '').replace('/', '')

  return (
    <Box key={`people-data-${index}`}>
      <Image src={`https://starwars-visualguide.com/assets/img/characters/${splitId}.jpg`}/>

      <Data>
        <Title>{people.name}</Title>

        <Attribute>
          <strong>Genre:</strong>
          {people.gender}
        </Attribute>

        <Attribute>
          <strong>Height:</strong>
          {people.height}
        </Attribute>

        <Attribute>
          <strong>Mass:</strong>
          {people.mass}
        </Attribute>

        <Attribute>
          <strong>Birth Year:</strong>
          {people.birth_year}
        </Attribute>

      </Data>
    </Box>)
}


const Image = styled.img`
  width: 100%;
  max-height: 350px;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
`

const Data = styled.div`
  padding: 16px;
`

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  display: block;
  padding-bottom: 16px;
  text-align: center;
`

const Attribute = styled.span`
  display: block;
  padding: 4px 0;
  
  strong {
    font-weight: 600;
    padding-right: 4px;
  }
`
