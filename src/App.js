import React, { Component } from 'react';
import Titles from "./components/Titles"
import  Form from "./components/Form"
import Weather from './components/Weather';

const API_KEY ="95122c63c81d7f4a0e062479bfb4bd0e";
class App extends Component {
  state = {
      temperature: undefined,
    city:undefined,
    country:undefined,
    humidity: undefined,
    description:undefined,
    error:undefined
    }
  getWeather = async (e)=>{
    e.preventDefault();
    let response = null;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
       const API_CALL= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}india&appid=${API_KEY}&units=metric`);
      const data= await API_CALL.json();
    
    if(city && country){
      if(data.main && data.sys && data.sys){
      console.log(data);
    this.setState({
      temperature: data.main.temp,
       city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description:data.weather[0].description,
      error:""
    });
  }else{
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "please enter correct location "
    });
  }}
   else{
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    });
  }
}
  render() { 
    const background = () => {
      switch(this.state.description) {

        case "light rain": 
        case "moderate rain":
        case "heavy intensity rain":
        case "very heavy rain": 
        case "extreme rain": 
        case "heavy intensity shower rain":
        case "freezing rain": return "col-xs-5 title-container-rainy"; break;
        case "snow":  
        case "light snow":
        case "heavy snow":
        case "Light shower snow":
        case "Heavy shower snow":
        case "Shower sleet": return "col-xs-5 title-container-snowy "; break;
        case "few clouds":
        case "scattered clouds":
        case "broken clouds":
        case "	overcast clouds: 85-100%":return "col-xs-5 title-container-cloudy"; break;
        default:      return  "col-xs-5 title-container-sunny "; break;
      }
    }
    return ( 
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className= {background()} >
                <Titles />
            </div>
              <div className="col-xs-7 form-container">
        <Form getWeather={this.getWeather}/>
        
        <Weather
         temperature={this.state.temperature} 
        humidity={this.state.humidity}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
                  
        />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
};
 
export default App;

