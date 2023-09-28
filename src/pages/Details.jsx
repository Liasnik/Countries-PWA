import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config'
import { Button } from '../components/Button'
import { DetailsCard } from '../components/DetailsCard'
import { Loader } from '../components/Loader'
import { Error } from '../components/Error'

export const Details = ({ language }) => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const getOnState = async () => {
      try {
        const data = await axios.get(searchByCountry(name))
        setCountry(data.data[0])
        setIsLoading(false)
      } catch (error) {
        console.error(error.message)
        setIsLoading(false)
        setError(['ПоМиЛкА: ', error.message])
      }
    }
    setError([])
    getOnState()
  }, [name])

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <Button onClick={handleGoBack}>
        {' '}
        <IoArrowBack />
        {language ? 'Back' : 'назад'}
      </Button>
      {error && <Error>{error}</Error>}
      {isLoading && <Loader />}
      {country && <DetailsCard country={country} language={language} />}
    </div>
  )
}
