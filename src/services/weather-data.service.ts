import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMessage } from 'src/models/res-message';
import { WeatherData } from 'src/models/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weatherData = new WeatherData()
  weatherDatas: WeatherData[] = []
  length: number = 0

  constructor(private http: HttpClient) { }

  getAllWeatherData(searchParams: WeatherData): Observable<WeatherData[]>{
    const res = this.http.get<WeatherData[]>("http://localhost:3000/weather-data", {params: {province: searchParams.province, date: searchParams.date, time: searchParams.time}})
    res.subscribe(data => {
      this.length = data.length
    })
    return res
  }


  insertWeatherData(): Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>("http://localhost:3000/weather-data", this.weatherData)
  }



  initProvince(province: string){
    this.weatherData.province = province
  }
  initDate(date: string){
    this.weatherData.date = date
  }
  initTime(time: string){
    this.weatherData.time = time
  }
  initTemp(temp: number){
    this.weatherData.temp = temp
  }
  initFeelLike(feel: number){
    this.weatherData.feel_like = feel
  }
  initMaxTemp(max: number){
    this.weatherData.max_temp = max
  }
  initMinTemp(min: number){
    this.weatherData.min_temp = min
  }
  initAirQuality(air: number){
    this.weatherData.air_quality = air
  }
  initWind(wind: number){
    this.weatherData.wind = wind
  }
  initHumidity(humidity: number){
    this.weatherData.humidity = humidity
  }
  initCloud(cloud: number){
    this.weatherData.cloud = cloud
  }
  initPressure(pressure: number){
    this.weatherData.pressure = pressure
  }
}
