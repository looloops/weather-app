/* const icon = wInfo.weather[0].icon; // For instance "09d"
<Image source={{ uri: ``http://openweathermap.org/img/w/${icon}.png`` }} /> */

import { Col, Card, Button, InputGroup, Row } from "react-bootstrap";

const TodaysWeather = function (props) {
  /*   console.log("TODAYS DATA", props.todaysData); */
  const icon = props.todaysData.weather[0].icon;

  const sunriseInUnix = props.todaysData.sys.sunrise;
  const convertedSunrise = new Date(sunriseInUnix * 1000);
  const sunriseTime = convertedSunrise.toString().split(" ").splice(4, 1).join(" ");
  /*   console.log(sunriseTime); */

  const sunsetInUnix = props.todaysData.sys.sunset;
  const convertedSunset = new Date(sunsetInUnix * 1000);
  const sunsetTime = convertedSunset.toString().split(" ").splice(4, 1).join(" ");
  /*   console.log(sunsetTime); */

  return (
    <>
      <Card className="text-center">
        <Card.Header>Current weather in {props.todaysData.name}</Card.Header>
        <Card.Body>
          <Card.Title>
            <Row className="d-flex flex-column">
              <Col>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" style={{ width: "100px" }} />
              </Col>
              <Col>
                <p className="fs-2">{props.todaysData.weather[0].main}</p>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>
            <Row className="d-flex flex-column">
              <Col>
                <p className="degrees">{props.todaysData.main.temp}°C</p>
                <p>
                  <strong>Min.</strong> {props.todaysData.main.temp_min}°C - <strong>Max.</strong>{" "}
                  {props.todaysData.main.temp_max}°C
                </p>
              </Col>
              <Col>
                <p>You can expect {props.todaysData.weather[0].description}</p>
              </Col>
              <Col>
                {" "}
                <p>
                  <strong>Sunrise</strong> at {sunriseTime} - <strong>Sunset</strong> at {sunsetTime}
                </p>
              </Col>

              <Col>
                <p>
                  <strong>Wind Speed</strong> {props.todaysData.wind.speed}
                </p>
              </Col>
            </Row>
          </Card.Text>
          <Button variant="primary">Next hours Weather in {props.todaysData.name}</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Now</Card.Footer>
      </Card>
    </>
  );
};

export default TodaysWeather;
