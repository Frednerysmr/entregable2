import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import WeatherContainer from './components/WeatherContainer'
import Loading from './components/Loading'

function App() {
  const [weather, setWeather] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY ="64cefcdb21ed2b7f52cbb9e182ad2c99"
    
    axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    .then(({data}) => setWeather(data))
    .catch((err) => console.log(err))
  }


  useEffect (() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className='font-["Lato"] flex justify-center items-center min-h-screen px-2 bg-[url("/backgroundWeather/wbg3.jpg")] bg-cover bg-center'>
      {
        weather === null ? (
        <Loading />
        ) : (
          <WeatherContainer weather={weather}/>
        )}
    </main>
  )
}

export default App