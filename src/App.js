import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import  SearchInput  from './SearchInput';
import SearchItem from './SearchItem';
import { FaGithub } from 'react-icons/fa';
import ForeCastList from './ForeCastList' 
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

export default function App() {
  const api_key = '6012b15ade90d1e82acb9c8176d9203e';
  const [search, setSearch] = useState('chennai'); 
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const onSearch = (e) => {
    setSearch(e.target.value);
    console.log('test', e.target.value);
  };
  const fetchData =async ()=>{
    try{
      const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`)
      
      setWeatherData(weatherRes.data);
      const forecastRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api_key}`)
      setForecastData(forecastRes.data.list)
    }catch(error){
      console.error('Error fetching data', error)

    }
  }

  useEffect(() => {
     
      if(search){
        fetchData()
      }

  }, [search]);

  return (
    <div className="App">
      <Container className="p-4 w-75 h-100 ">
        <div className="border-0 px-2 bg-info" style={{borderRadius:'10px'}}>
          <Row >
            <Col className="px-3 py-2 col font-bold fs-4">React Weather</Col>
            <Col className="text-end px-3 mx-2 my-2 ">
              <FaGithub />
            </Col>
          </Row>
          <div className="py-4">
            <SearchInput search={search} onChange={onSearch} />
            <FaSearch className="faSearch" />
          </div>
           <div className="py-3">
            <SearchItem weatherData={weatherData} />
          </div>  
          <div className="py-3">
            <ForeCastList forecastData={forecastData} />
          </div>
        </div>
      </Container>
    </div>
  );
}
