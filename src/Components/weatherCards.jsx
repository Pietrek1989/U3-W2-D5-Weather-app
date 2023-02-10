import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const WeatherCards = (props) => {
  const [weatherObj, setWeatherObj] = useState({});
  const [weatherArray, setWeatherArray] = useState([]);

  const fetchWeather = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&APPID=ed25fec635fe1f440571593fc2ef46e5&units=metric`
      );
      if (response.ok) {
        let data = await response.json();
        setWeatherObj(data);
        setWeatherArray(data.weather[0]);
      } else {
        // eslint-disable-next-line no-throw-literal
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card border="dark" onClick={() => props.getDetails(weatherObj)}>
      <Card.Header className="text-dark">
        <strong>{weatherObj.name}</strong>
      </Card.Header>
      <Card.Body className="text-dark">
        {/* <Card.Title>{weatherObj.main.temp}</Card.Title> */}
        <Card.Text>
          <span>{weatherArray.main}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCards;
