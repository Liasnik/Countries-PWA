import styled from 'styled-components'

const Wrapper = styled.article`
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  margin-bottom: 30px;

  @media (min-width: 767px) {
    margin-bottom: 0;
  }
`

const CardImage = styled.img`
  display: block;
  width: 100%;

  object-fit: cover;
  object-position: center;
`

const CardBody = styled.div`
  padding: 16px 24px 32px;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--font-size-md);
  font-weight: var(--fw-bold);
`

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px 0 0;
`

const CardListItem = styled.li`
  font-size: var(--font-size-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}
