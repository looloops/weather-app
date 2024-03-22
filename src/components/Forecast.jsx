import { Col, Card, Button, Row } from "react-bootstrap";

const Forecast = function (props) {
  return (
    <>
      {props.forecastData.list.map((prop) => {
        return (
          <Card className="text-center">
            <Card.Header>Current weather at {prop.dt_txt}</Card.Header>
            <Card.Body>
              <Card.Title>
                <Row className="d-flex flex-column">
                  <Col>
                    <img
                      src={`http://openweathermap.org/img/w/${prop.weather[0].icon}.png`}
                      alt=""
                      style={{ width: "100px" }}
                    />
                  </Col>
                  <Col>
                    <p className="fs-2">{prop.weather[0].main}</p>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text>
                <Row className="d-flex flex-column">
                  <Col>
                    <p className="degrees">{prop.main.temp}°C</p>
                    <p>
                      <strong>Min.</strong> {prop.main.temp_min}°C - <strong>Max.</strong> {prop.main.temp_max}°C
                    </p>
                  </Col>
                  <Col>
                    <p>You can expect {prop.weather[0].description}</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>
                      <strong>Sunrise</strong> at {} - <strong>Sunset</strong> at {}
                    </p>
                  </Col>

                  <Col>
                    <p>
                      <strong>Wind Speed</strong> {prop.wind.speed}
                    </p>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{prop.dt_txt}</Card.Footer>
          </Card>
        );
      })}
    </>
  );
};

export default Forecast;
