import { useState } from "react"
import WeatherStat from "./WeatherStat"


const WeatherContainer = ({weather}) => {
    const [isCelsius, setIsCelsius] = useState(true)

    const changeUnitTemp = (temp) => {
        if (isCelsius) {
            //Transformacion a celsius
            const celsiusTemp = (temp - 273.15).toFixed(1)
            return `${celsiusTemp} °C`
        } else {
            //Transformacion a fahrenheit
            const fahrenheitTemp = (((temp - 273.15) * 9/5) +32).toFixed(1)
            return `${fahrenheitTemp} °F`
        }
    }

    const handleChangeUnit = () => {
        setIsCelsius(!isCelsius)
    }

    console.log(changeUnitTemp(weather.main.temp))

    console.log(weather)
  return (
   <section className="text-center gap-5 grid">
    <h3 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h3>

    <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        {/* seccion superior */}
        <article className="bg-[#e0e0e080] rounded-2xl grid grid-cols-[1fr_auto] items-center p-3">
            <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
            <span className="text-5xl">{changeUnitTemp(weather.main.temp)}</span>
            <picture>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
            </picture>
        </article>

        {/* seccion inferior */}
        <article className="grid grid-cols-[1fr_auto_1fr_auto_1fr] justify-items-center bg-[#e0e0e080]  rounded-2xl p-2 py-3 sm:grid-cols-1">
          <WeatherStat icon="/wind1.png" unit="m/s" value={weather.wind.speed}/>
          <div className="bg-slate-500/50 w-1 h-auto  sm:w-11/12 sm:h-1"></div>
          <WeatherStat icon="/humidity2.png" unit="%" value={weather.main.humidity}/>
          <div className="bg-slate-500/50 w-1 h-auto sm:w-11/12 sm:h-1"></div>
          <WeatherStat icon="/pressure3.png" unit="hPa" value={weather.main.pressure}/>
        </article>
    </div>
  
    <button className="rounded-full text-base font-semibold bg-green-400 w-40 m-[0_auto] py-1 active:scale-[.98] active:duration-75 hover:scale-[1.06] ease-out transition-all " onClick={handleChangeUnit}>{isCelsius ? "Cambiar a °F" :"Cambiar a °C"}</button>
   </section>
  )
}

export default WeatherContainer