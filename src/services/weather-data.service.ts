import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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


  updateWeatherData(): Observable<ResponseMessage>{
    this.currentMessage.subscribe(data => {
      this.weatherData.id = data.id
    })
    return this.http.put<ResponseMessage>("http://localhost:3000/weather-data", this.weatherData)
  }

  deleteWeatherData(): Observable<ResponseMessage>{
    let searchParams = new WeatherData
    this.currentMessage.subscribe(data => {
      searchParams = data
    })
    return this.http.delete<ResponseMessage>("http://localhost:3000/weather-data", {params: {province: searchParams.province, date: searchParams.date, time: searchParams.time}})
  }

  private messageSource = new BehaviorSubject(new WeatherData);
  currentMessage = this.messageSource.asObservable();
  changeMessage(toModify: WeatherData) {
    this.messageSource.next(toModify)
  }

  private sp = new BehaviorSubject(new WeatherData);
  searchParams = this.sp.asObservable()
  changeSearchParams(search: WeatherData){
    this.sp.next(search)
  }

  private sr = new BehaviorSubject(true)
  searchRoute = this.sr.asObservable()
  changeSearchRoute(change: boolean){
    this.sr.next(change)
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
