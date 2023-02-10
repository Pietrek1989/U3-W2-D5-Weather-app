import { Card } from "react-bootstrap";

const Weather5 = (props) => {
  return (
    <>
      {props.fiveDays.map((singleDay) => {
        return (
          <Card border="dark" className={singleDay.weather[0].main}>
            <Card.Header className="text-dark">
              <strong>{singleDay.dt_txt}</strong>
            </Card.Header>
            <Card.Body className="text-dark">
              <Card.Title>{singleDay.weather[0].main}</Card.Title>
              <Card.Text>
                <span>{parseInt(singleDay.main.temp)} °</span>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
export default Weather5;
