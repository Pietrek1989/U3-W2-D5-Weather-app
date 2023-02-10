import { Card } from "react-bootstrap";

const Weather5 = (props) => {
  return (
    <>
      {props.fiveDays.map((singleDay) => {
        return (
          <Card border="dark">
            <Card.Header className="text-dark">
              <strong>{singleDay.dt}</strong>
            </Card.Header>
            <Card.Body className="text-dark">
              {/* <Card.Title>{weatherObj.main.temp}</Card.Title> */}
              <Card.Text>
                <span>{singleDay.dt}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
export default Weather5;
