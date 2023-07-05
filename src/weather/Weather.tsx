import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    long: 0,
  });
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");

  const getLocation = (position: any) => {
    setCoords({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };

  const getWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(getLocation);
      if (coords.lat && coords.long !== 0) {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        setCity(res.data.name);
        setWeather(res.data.weather[0].main);
        setIcon(res.data.weather[0].icon);
        setTemperature(res.data.main.temp);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, [coords.lat, coords.long]);

  return (
    <div>
      {weather && (
        <div className="gradient-Card w-full mb-2 mt-2 rounded-3xl">
          <div className="flex justify-between items-center align-middle p-2 mx-5 text-[#1D1D1F]">
            <div className="flex flex-col">
              {icon && (
                <img
                  src={`https://hgezi.csb.app/${icon}.svg`}
                  alt={weather}
                  className="w-15"
                />
              )}
              <p className="pl-3 italic hidden md:block font-serif">
                {weather}
              </p>
            </div>
            <div className="md:pr-10 italic font-serif">
              <h2 className="text-lg">
                {temperature} <span>&deg;</span> C
              </h2>
              <p className="text-lg">{city}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
