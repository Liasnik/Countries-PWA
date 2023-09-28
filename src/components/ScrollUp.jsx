import styled from 'styled-components'

export const ScrollUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--color-ui-base);
  color: var(--color-text);
  font-size: 22px;
  border-radius: 50%;
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 10px;
  box-shadow: var(--shadow-button);
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 1450px) {
    bottom: 40px;
    right: 50px;
  }
`
