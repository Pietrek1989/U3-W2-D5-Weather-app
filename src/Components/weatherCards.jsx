import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const WeatherCards = (props) => {
  const [weatherObj, setWeatherObj] = useState({});
  const [weatherArray, setWeatherArray] = useState([]);
  const [weatherMain, setWeatherMain] = useState([]);

  const fetchWeather = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&APPID=ed25fec635fe1f440571593fc2ef46e5&units=metric`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.weather[0]);
        setWeatherObj(data);
        setWeatherArray(data.weather[0]);
        setWeatherMain(data.main);
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
    <Card
      border="dark"
      onClick={() => props.getDetails(weatherObj)}
      className={weatherArray.main}
    >
      <Card.Header className="text-dark d-flex justify-content-center position-relative">
        <div>
          <strong>{weatherObj.name}</strong>
        </div>
        <div>
          <span className="align-self-end">
            <img
              className="pr-auto flag"
              src={props.flag}
              alt="uk-flag"
              width="25px"
              height="15px"
            ></img>
          </span>
        </div>
      </Card.Header>
      <Card.Body className="text-dark">
        {/* <Card.Title>{weatherObj.main.temp}</Card.Title> */}
        <Card.Text>
          <span>{parseInt(weatherMain.temp)} C°</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCards;
