import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 12px 15px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 64px;
  }
`

export const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
