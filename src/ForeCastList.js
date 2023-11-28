import React from 'react'
import { Card, Row,Col } from 'react-bootstrap'

const ForeCastList = ({forecastData}) => {
    const getWeeks=(item)=>{
        const daysofweek =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(item * 1000);
        const dayofweek = date.getDay();
        return daysofweek[dayofweek];
    }
    
  return (
    <div >
    {forecastData.length > 0 && (
      <Card className="py-3">
        <Card.Title className="py-2 fs-5 px-3">
        <Row>
          <Col md={6} className='text-secondary fw-bolder'>Extended Forecast</Col>
          </Row>
        </Card.Title>

        <Card.Body>
          <Row>
            {forecastData.filter((item, index, array) => {
              return array.findIndex((i) => i.dt_txt.split(' ')[0] === item.dt_txt.split(' ')[0]) === index;
            }).map((item, index) => {
                return(
                <Col key={index} className="text-center text-info fw-semibold">
                    <Card.Title className='text-info fw-bold'>{getWeeks(item.dt)}</Card.Title>
                    <Card.Img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weather" style={{width:'100px'}}/>
                    <Card.Text className='text-secondary fw-semibold'>{item.weather[0].main}</Card.Text>
                    <Card.Text >{Math.round(item.main.temp_min)}&deg;C / {Math.round(item.main.temp_max)}&deg;C</Card.Text>
                </Col>
                )
            })
            
            }
          </Row>
        </Card.Body>
      </Card>
    )}
  </div>
    
    
  )
}

export default ForeCastList