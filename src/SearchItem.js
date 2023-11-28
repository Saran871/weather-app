import React from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';
import { FaCloudBolt } from 'react-icons/fa6';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { LiaWindSolid } from 'react-icons/lia';
import pressureImg from './image/icons8-pressure-80.png'

const SearchItem = ({weatherData}) => {
 
  return (
    <Card>
        {
            weatherData && (
                <Card.Body >
                    <Row>
                    <Col md={6} className='text-secondary fw-bolder'>Current Weather</Col>
                    <Col md={6} className="text-end">
                        <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        />
                    </Col>
                    </Row>
        <div className="py-3 px-1 fs-5">
          <Row>
            <Col md={6} className="text-secondary">
              <Col md={12} className="text-info fw-bolder">{weatherData ? weatherData.name: ""}</Col>
              <Row className="py-2">
                <Col md={6}>
                <Card.Img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} style={{width:'150px'}} alt="weather item" />
                </Col>
                <Col md={6} className='' style={{fontSize:'60px'}}>{weatherData ? Math.round(weatherData.main.temp): ""} &deg;C</Col>
              </Row>
              <Col md={12} className="text-info">{weatherData !== "" ? weatherData.weather[0].description: ""}</Col>
            </Col>
            <Col md={6}>
              <Col md={12}>Feels like {weatherData !== ""? Math.round(weatherData.main.feels_like): ""} &deg;C</Col>
              <Col md={12}>
                <Row>
                  <Col md={5}>
                    <FaLongArrowAltUp  size={30}/> {weatherData !== ""? Math.round(weatherData.main.temp_max): ""} &deg;C
                  </Col>
                  <Col md={5}>
                    <FaLongArrowAltDown size={30} /> {weatherData !== ""? Math.round(weatherData.main.temp_min): ""} &deg;C
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <WiHumidity size={30}/> Humidity {weatherData !== ""? Math.round(weatherData.main.humidity): ""}%
              </Col>
              <Col md={12}>
                <LiaWindSolid size={30} /> Winds {weatherData !== ""? weatherData.wind.speed: ""}kph
              </Col>
              <Col md={12} >
                <Card.Img src={pressureImg} alt="pressure image" style={{width:'30px'}} /> Pressure {weatherData !== ""? weatherData.main.pressure: ""}hpa</Col>
            </Col>
          </Row>
        </div>
      </Card.Body>
            )
        }
      
    </Card>
  );
};
export default SearchItem;
