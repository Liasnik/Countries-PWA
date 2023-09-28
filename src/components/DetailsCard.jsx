import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { filterByCode } from '../config'
import { Error } from './Error'

const Wrapper = styled.section`
  margin: 48px 0 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 32px;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 80px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  box-shadow: var(--shadow);
  }
`

const CardTitle = styled.h1`
  margin: 20px 0;
  font-weight: var(--fw-normal);
`

const ListGroup = styled.div`
 display: flex;
 flex-direction: column;
 padding-bottom: 18px;
 gap: 18px;

 @media (min-width: 1024px) {
  padding-bottom: 25px;
    gap: 25px;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 1.8;
  letter-spacing: 1.5px;

  & > b {
    font-weight: var(--fw-bold);
  }

  & > a {
    color: var(--color-text);
  }
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  & > b {
    font-weight: var(--fw-bold);
    margin-bottom: 15px;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  @media (min-width: 1024px) {
    margin-top: 10px;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 5px 10px;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow-button);
  cursor: pointer;
  border-radius: var(--radius-sm);
`

export const DetailsCard = ({ country, language }) => {
  const [bordering, setBordering] = useState([])
  const navigate = useNavigate()
  const [error, setError] = useState('')

  useEffect(() => {
    if (country.borders)
      axios
        .get(filterByCode(country.borders))
        .then(({ data }) => setBordering(data))
        .catch((error) => setError(error.message))
    setError('')
  }, [country.borders])

  let people
  const lastNumber = country.population % 10
  if (lastNumber === 1) {
    people = language ? 'people' : 'особа'
  } else if (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) {
    people = language ? 'people' : 'особи'
  } else people = language ? 'people' : 'осіб'

  return (
    <Wrapper>
      <CardImage src={country.flags.svg} alt={country.flag.alt} />
      <div>
        <CardTitle>{country.name.common}</CardTitle>
        <ListGroup>
          <List>
            <ListItem>
              {language ? 'Capital: ' : 'Столиця: '} <b>{country.capital}</b>
            </ListItem>
            <ListItem>
              {language ? 'Official Name:' : 'Офіційна назва:'}{' '}
              <b>{country.name.official}</b>
            </ListItem>
            <ListItem>
              {language ? 'Independent:' : 'Незалежність:'}{' '}
              <b>
                {country.independent
                  ? language
                    ? 'independent'
                    : 'незалежна'
                  : language
                  ? 'Dependent'
                  : 'залежнa територія'}
              </b>
            </ListItem>
          </List>

          <List>
            <ListItem>
              {language
                ? 'Alternative Spellings:'
                : 'Альтернативні варіанти написання:'}
            </ListItem>
            <ListItem>
              <b>{country.altSpellings[0]}</b>
            </ListItem>
            <ListItem>
              <b>{country.altSpellings[1]}</b>
            </ListItem>
            <ListItem>
              <b>{country.altSpellings[2]}</b>
            </ListItem>
          </List>

          <List>
            <ListItem>
              {language ? 'Region:' : 'Регіон:'} <b>{country.region}</b>
            </ListItem>
            <ListItem>
              {language ? 'Subregion:' : 'Субрегіон:'}{' '}
              <b>{country.subregion}</b>
            </ListItem>
            <ListItem>
              {language ? 'Population:' : 'Населення:'}{' '}
              <b>{country.population.toLocaleString()}</b> {people}
            </ListItem>

            <ListItem>
              {language ? 'Driving:' : 'Сторона дорожнього руху:'}{' '}
              <b>{country.car.side}</b>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <a href={country.maps.googleMaps}>
                {language ? 'Google Maps' : 'Google Карти'}
              </a>
            </ListItem>
            <ListItem>
              <a href={country.maps.openStreetMaps}>
                {language ? 'Open Street Maps' : 'Open Street Карти'}
              </a>
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          {language ? 'Border Countries:' : 'Прикордонні країни:'}
          <b></b>
          {error && <Error>{error}</Error>}
          {!country.borders ? (
            <span>
              {language
                ? 'There isn`t border countries'
                : 'Немає прикордонних країн'}
            </span>
          ) : (
            <TagGroup>
              {bordering &&
                bordering.map((b) => (
                  <Tag
                    key={b.name.common}
                    onClick={() => navigate(`/country/${b.name.common}`)}
                  >
                    {b.name.common}
                  </Tag>
                ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
}
