import { useEffect, useState } from 'react'
import Search from './Search'
import { CustomSelect } from './CastomSelect'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: var(--color-bg);
  padding: 12px 5px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    aline-items: center;
  }
  @media (min-width: 1024px) {
    padding: 20px 15px;
  }
`
const options = [
  { value: 'Europe', label: 'Europe' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Antarctic', label: 'Antarctic' },
]

export const Controls = ({ onSearch, language }) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    const regionValue = region?.value || ''
    onSearch(search, regionValue)

    // eslint-disable-next-line
  }, [search, region])

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} language={language} />
      <CustomSelect
        options={options}
        placeholder={language ? 'Filter by region' : 'Фільртувати по регіону'}
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}
