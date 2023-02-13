import { useEffect, useState } from "react";
import { Row, Container, Col, InputGroup, Form, Button } from "react-bootstrap";
import Weather5 from "./Weather5";
import WeatherCards from "./weatherCards";

const Main = () => {
  const [weatherObj, setWeatherObj] = useState(false);
  const [weatherObj5, setWeatherObj5] = useState([]);
  const [weatherArray, setWeatherArray] = useState([]);
  const [weatherMain, setWeatherMain] = useState({});
  const [search, setSearch] = useState(" ");
  const [cityName, setCityName] = useState("");
  const [active, setactive] = useState(false);

  const fetchWeather = async (city) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ed25fec635fe1f440571593fc2ef46e5&units=metric`
      );
      if (response.ok) {
        let data = await response.json();
        // console.log(response);
        // console.log(data);
        getDetails(data);
        setCityName(data.name);
        fetchWeather5();
      } else {
        // eslint-disable-next-line no-throw-literal
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchWeather5 = async (cityName) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=ed25fec635fe1f440571593fc2ef46e5&units=metric`
      );
      if (response.ok) {
        let data5 = await response.json();
        console.log(response);
        console.log(data5.list);
        let arrayOf5 = data5.list;
        console.log(arrayOf5);
        setWeatherObj5(arrayOf5);
      } else {
        // eslint-disable-next-line no-throw-literal
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const toggleClass = () => {
    setactive(true);
  };
  useEffect(() => {
    toggleClass();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherObj]);
  const getDetails = (object) => {
    setWeatherObj(object);
    setWeatherArray(object.weather[0]);
    setWeatherMain(object.main);
    fetchWeather5(object.name);
  };
  return (
    <>
      <Container>
        <InputGroup size="sm" className="mb-3">
          <Form.Control
            aria-label="Search"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Write a title name of the city to search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button
            variant="info"
            id="search-button"
            onClick={() => {
              fetchWeather(search);
            }}
          >
            <InputGroup.Text id="inputGroup-sizing-sm">
              <i className="fas fa-search"></i>
            </InputGroup.Text>
          </Button>
        </InputGroup>
        <Row className="flex-column  flex-lg-row">
          <Col xs={12} lg={9}>
            {weatherObj && (
              <>
                <div className="detail-wrapper mt-5">
                  <h1 className={active ? "animation" : ""}>
                    {weatherObj.name.toUpperCase()}
                  </h1>
                  <h5>TODAY: {weatherArray.description.toUpperCase()}</h5>
                  <div
                    className="d-flex justify-content-between "
                    id={weatherArray.main}
                  >
                    <div>
                      <p>Temp-now: {parseInt(weatherMain.temp_max)} °</p>
                      <p>Low: {parseInt(weatherMain.temp_min)} °</p>
                      <p>High: {parseInt(weatherMain.temp_max)} °</p>
                      <p>Feels like: {parseInt(weatherMain.feels_like)} °</p>
                    </div>
                    <div>
                      <p>Humidity: {weatherMain.humidity}</p>
                      <p>Pressure: {weatherMain.pressure}</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex days-wrapper">
                  <Weather5 fiveDays={weatherObj5}></Weather5>
                </div>
              </>
            )}
          </Col>
          <Col xs={12} lg={3}>
            <h5>TODAY AROUND THE WORLD</h5>
            <WeatherCards
              getDetails={getDetails}
              city={"London"}
              country="uk"
            ></WeatherCards>
            <WeatherCards
              getDetails={getDetails}
              city={"Warsaw"}
              country="pl"
            ></WeatherCards>
            <WeatherCards
              getDetails={getDetails}
              city={"New York"}
              country="us"
            ></WeatherCards>
            <WeatherCards
              getDetails={getDetails}
              city={"Paris"}
              country="fr"
            ></WeatherCards>
            <WeatherCards
              getDetails={getDetails}
              city={"Rome"}
              country="it"
            ></WeatherCards>
            <WeatherCards
              getDetails={getDetails}
              city={"Barcelona"}
              country="es"
            ></WeatherCards>
            <WeatherCards
              getDetails={getDetails}
              city={"Vienna"}
              country="at"
            ></WeatherCards>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
