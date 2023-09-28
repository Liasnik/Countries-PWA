import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-bottom: 12px;
  width: 280px;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
})`
  background-color: var(--color-ui-base);
  color: var(--color-text);
  border: none;
  outline: none;
  margin-left: 22px;
  width: 150px;
`

const Search = ({ search, setSearch, language }) => {
  return (
    <InputContainer>
      <IoSearch size="18px" />
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder={language ? 'Search for country' : 'Пошук по країні'}
      />
    </InputContainer>
  )
}

export default Search
