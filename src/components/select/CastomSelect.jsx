import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      color: 'var(--color-text)',
      backgroundColor: 'var(--color-ui-base)',
      borderRadius: 'var(--radius)',
      padding: '4px',
      border: 'none',
      boxShadow: 'var(--shadow-input)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,

      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected
        ? 'var(--color-bg)'
        : 'var(--color-ui-base)',
    }),
  },
})`
  width: 280px;
  color: var(--color-text);

  & > * {
    box-shadow: var(--shadow);
  }
  & * {
    color: var(--color-text) !important;
  }

  & > div[id] {
    background-color: var(--color-ui-base);
  }
`
