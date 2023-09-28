import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'
import { useState } from 'react'

function App() {
  const [countries, setCountries] = useState([])
  const [language, setLanguage] = useState(false)

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                language={language}
                setLanguage={setLanguage}
                countries={countries}
                setCountries={setCountries}
              />
            }
          />
          <Route
            path="country/:name"
            element={<Details language={language} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  )
}

export default App
