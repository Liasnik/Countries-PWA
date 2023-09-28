import styled from 'styled-components'

export const Loader = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background: transparent;
  border: solid var(--color-ui-base) 6px;
  border-radius: 50%;

  border-top-color: var(--color-text);
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`
