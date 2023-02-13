import { Card, Col } from "react-bootstrap";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

const Weather5 = (props) => {
  return (
    <>
      {props.fiveDays.map((singleDay, i) => {
        const weather = singleDay.weather[0].main;
        const temp = singleDay.main.temp;
        return (
          <Col className="p-0" key={i}>
            <Card border="dark" className={`day-cards ${weather}`}>
              <Card.Header className="text-dark">
                {/* <strong>{singleDay.dt_txt}</strong> */}
                {format(parseISO(singleDay.dt_txt), " ccc  kk':'mm")}
              </Card.Header>
              <Card.Body className="text-dark">
                <Card.Title>{weather}</Card.Title>
                <Card.Text>
                  <span>{parseInt(temp)} °</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default Weather5;
