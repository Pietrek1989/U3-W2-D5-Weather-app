import WeatherCards from "./weatherCards";

const WeatherCardsParent = (props) => {
  return (
    <>
      <WeatherCards
        getDetails={props.getDetails}
        city={"London"}
        country="uk"
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Warsaw"}
        country="pl"
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"New York"}
        country="us"
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Paris"}
        country="fr"
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Rome"}
        country="it"
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Barcelona"}
        country="es"
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Vienna"}
        country="at"
      ></WeatherCards>
    </>
  );
};
export default WeatherCardsParent;
