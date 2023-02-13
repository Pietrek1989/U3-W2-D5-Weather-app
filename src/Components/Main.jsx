import { useState } from "react";
import { Row, Container, Col, InputGroup, Form, Button } from "react-bootstrap";
import DetailsComponent from "./DetailsComponent";
import Weather5 from "./Weather5";
import WeatherCardsParent from "./WeatherCardsParent";

const Main = () => {
  const [weatherObj, setWeatherObj] = useState(null);
  const [weatherObj5, setWeatherObj5] = useState([]);
  const [weatherArray, setWeatherArray] = useState([]);
  const [weatherMain, setWeatherMain] = useState({});
  const [search, setSearch] = useState(" ");

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

  const getDetails = (object) => {
    setWeatherObj(object);
    setWeatherArray(object.weather[0]);
    setWeatherMain(object.main);
    fetchWeather5(object.name);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchWeather(search);
    }
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
            onKeyDown={handleKeyDown}
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
            onKeyDown
          >
            <InputGroup.Text id="inputGroup-sizing-sm">
              <i className="fas fa-search"></i>
            </InputGroup.Text>
          </Button>
        </InputGroup>
        <Row className="flex-column  flex-lg-row">
          <Col xs={12} lg={9}>
            <DetailsComponent
              weatherObj={weatherObj}
              weatherArray={weatherArray}
              weatherMain={weatherMain}
            ></DetailsComponent>
            <div className="d-flex days-wrapper">
              <Weather5 fiveDays={weatherObj5}></Weather5>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <h5>TODAY AROUND THE WORLD</h5>
            <WeatherCardsParent getDetails={getDetails}></WeatherCardsParent>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
