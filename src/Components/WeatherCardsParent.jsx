import WeatherCards from "./weatherCards";
import ukFlag from "../assets/flag-uk.png";
import fraFlag from "../assets/flag-fra.png";
import usFlag from "../assets/flag-us.png";
import itaFlag from "../assets/flag-ita.png";
import spaFlag from "../assets/flag-spa.png";
import japFlag from "../assets/flag-jap.png";
import gerFlag from "../assets/flag-ger.png";

const WeatherCardsParent = (props) => {
  return (
    <>
      <WeatherCards
        getDetails={props.getDetails}
        city={"London"}
        country="uk"
        flag={ukFlag}
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Tokyo"}
        country="jap"
        flag={japFlag}
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"New York"}
        country="us"
        flag={usFlag}
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Paris"}
        country="fr"
        flag={fraFlag}
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Rome"}
        country="it"
        flag={itaFlag}
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Barcelona"}
        country="es"
        flag={spaFlag}
      ></WeatherCards>
      <WeatherCards
        getDetails={props.getDetails}
        city={"Munich"}
        country="ger"
        flag={gerFlag}
      ></WeatherCards>
    </>
  );
};
export default WeatherCardsParent;
