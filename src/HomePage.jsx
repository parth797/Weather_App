import { useEffect, useState } from "react";
import './css/homePage.css'
import axios from 'axios'
import temp from './assets/sun&cloud.png'

function HomePage(){

    const [data,setData]=useState({});
    const [inputCity,setInputCity]=useState("")
    const apiKey="978a769d22da2e284bc84964ddaa7f0a"

    const getWeatherDetails=(cityName)=>{
        if(!cityName)return
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=" +apiKey
        axios.get(apiUrl).then((res)=>{
            console.log("response",res.data);
            setData(res.data)
        }).catch((err)=>{
            console.log("error",err);
        })
    }

    const handleSearch=()=>{
        getWeatherDetails(inputCity)
    }

    const handleChangeInput=(e)=>{
        setInputCity(e.target.value)
        console.log("value",e.target.value);
    }
    useEffect(()=>{
        getWeatherDetails("mumbai")
    },[])

    return(
        <>
        
            
            <div className="col-12 " id="title">
                <h1 className="mt-5 text-white">Weather App</h1>
                <div className="d-grid col-4 mt-5">
                <input type="text" className="form-control my-4" placeholder="Enter City" value={inputCity} onChange={handleChangeInput} />
                <button type="button" className="btn btn-primary mb-5" onClick={handleSearch} >Search</button>
                </div>
                
            </div>

            <div className="col-12 mt-3 ">
                <div className="text-center shadow bg-white" id="temp">
                    <img src={temp} id="sunimg" />
                    <h5 id="inputFont">{data?.name}</h5>
                    <h6 id="inputFont1">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
                    <h6 className="" id="inputFont">wind : {data?.wind?.speed}m/s</h6>
                </div>
            </div>
       
           
        </>
    )
}
export default HomePage;