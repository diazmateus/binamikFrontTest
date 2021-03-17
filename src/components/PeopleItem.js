import Box from './Box'
import styled from 'styled-components'

export const PeopleItem = (people = {}, index) => {
  const splitId = people.url.replace('http://swapi.dev/api/people/', '').replace('/', '')

  return (
    <Box key={`people-data-${index}`}>
      <Image src={`https://starwars-visualguide.com/assets/img/characters/${splitId}.jpg`}/>

      <Data>
        <Title>{people.name}</Title>
        <Row>
          <Info>
            <Attribute>Genre:</Attribute>
            <Value>{people.gender}</Value>
          </Info>

          <Info>
            <Attribute>Height:</Attribute>
            <Value>{people.height}</Value>
          </Info>

          <Info>
            <Attribute>Mass:</Attribute>
            <Value>{people.mass}</Value>
          </Info>

          <Info>
            <Attribute>Birth Year:</Attribute>
            <Value>{people.birth_year}</Value>
          </Info>
        </Row>

        <Row>
          <Info>
            <Attribute>Hair Color:</Attribute>
            <Value>{people.hair_color}</Value>
          </Info>

          <Info>
            <Attribute>Skin Color:</Attribute>
            <Value>{people.skin_color}</Value>
          </Info>

          <Info>
            <Attribute>Eye Color:</Attribute>
            <Value>{people.eye_color}</Value>
          </Info>

        </Row>

      </Data>
    </Box>)
}


const Image = styled.img`
  height: 148px;
  border-radius: 0 0 0 4px;
`

const Data = styled.div`
  width: 100%;
`

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  display: block;
  padding: 8px;
`

const Row = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

const Attribute = styled.span`
  font-weight: 600;
`

const Value = styled.span`
  display: block;
`

const Info = styled.div`
  font-size: 0.875rem;
  display: block;
`
