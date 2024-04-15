import React from 'react';
import './weatherapp.css';
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import './weatherpng.jpg'

const Weatherapp = () => {

  let d = document;
  let input = d.querySelector('input');
  console.dir(input)
  // let humidity1 = d.querySelector('humidity');
  

 function Search(){
    let city = document.querySelector("input").value
    if (city ==="") {
      alert('Please enter City Name')
      return;
    }
    console.log(city);
    Fetchweather(city);
  }

  async function Fetchweather(city){
    const weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=168949eea6007dbadcc0fe0ced53bc1e&units=metric`
    const response = await fetch(weatherurl);
    const data = await response.json();

    console.log(data);
    document.getElementsByClassName("temp")[0].innerHTML = data.main.temp+'°C';
    document.getElementsByClassName("windspeed-text")[0].innerHTML = data.wind.speed+'km/h';
    document.getElementsByClassName("humidity")[0].innerHTML = data.main.humidity+'%';
  }

  const [color,setcolor] = useState("#203E48");

    let Darkmode = ()=>{
        if (color=="#203E48"){
          setcolor("black")
        }
        else{
          
          setcolor("#203E48")
        }
    }
    
  return (
    <div className='main-container' style={{background:color}}>
      <div className="main">
        <div className="inputbox">
          <input type="text" placeholder='Enter City Name' />
          <button onClick={()=>{Search()}}><CiSearch/></button>
        </div>
        <div className="imagebox">
          <img src="https://play-lh.googleusercontent.com/w7UFGBz9aDJ5vF6FhRqO9KxSPSPR18VKHPPOqOrLTxdoFnDbD6kFA4uVYijLMp7PoC7u" alt="Weather" />
        </div>
        <h1 className='temp'>24°C</h1>
        <div className="infobox">
          <div className="humiditybox">
            <img src="https://static-00.iconduck.com/assets.00/humidity-icon-512x419-5m7ztixz.png"/><h1 className="humidity">&nbsp;12%</h1>
          </div>
          <div className="windspeed">
           <img src="https://cdn-icons-png.flaticon.com/512/54/54298.png" alt="" /> 
           <h1 className='windspeed-text'>&nbsp;120km</h1>
          </div>
        </div>
      </div>
      <div className="button"><button onClick={()=>{Darkmode()}}>Dark mode</button></div>
    </div>
  )
}

export default Weatherapp;
