import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Container } from './Container'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import logo1 from '../images/Black720x347.png'
import logo2 from '../images/White720-347.png'
import logo3 from '../images/MapWhite_612.png'
import logo4 from '../images/MapBlack_614.png'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  color: var(--color-text);
  font-size: var(--font-size-sm);
  gap: 20px;

  @media (min-width: 1024px) {
    padding: 12px 15px;
  }
`
const LefttBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Image = styled.img`
height:40px;
`

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--font-size-big);
  font-weight: var(--fw-bold);
  text-decoration: none;
  min-width: 83px;
`

const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  text-transform: capitalize;

  & span {
    display: none;
  }

  @media (min-width: 767px) {
    width: 125px;

    & span {
      display: initial;
    }
  }
`

export const Header = ({ setLanguage, language }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <LefttBlock>
          <Title>
            <Image src={theme === 'dark' ? logo2: logo1} /> 
          </Title>
          {/* <Image src={theme === 'dark' ? logo3: logo4} />
          <Title>{ theme === 'dark' && (language ? 'Countries' : 'Країни')} </Title> */}
          </LefttBlock>
          <RightBlock>
            <Button onClick={() => setLanguage(!language)}>
              {language ? 'UA' : 'EN'}
            </Button>
            <ModeSwitcher onClick={toggleTheme}>
              {theme === 'dark' ? (
                <>
                  <IoSunnyOutline size="18px" />
                  <span>{language ? 'light Mode' : 'світла тема'}</span>
                </>
              ) : (
                <>
                  <IoMoonOutline size="16px" />
                  <span>{language ? 'dark Mode' : 'темний режим'}</span>
                </>
              )}
            </ModeSwitcher>
          </RightBlock>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
