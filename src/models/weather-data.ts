export class WeatherData {
    id: string;
    province: string;
    date: string;
    time: string;
    description: string;
    temp: number;
    feel_like: number;
    min_temp: number;
    max_temp: number;
    pressure: number;
    wind: number;
    air_quality: number;
    cloud: number;
    humidity: number;

    constructor(){
        this.id = ""
        this.province = ""
        this.date = ""
        this.time = ""
        this.description = ""
        this.temp = 0
        this.min_temp = 0
        this.max_temp = 0
        this.cloud = 0
        this.air_quality = 0
        this.humidity = 0
        this.pressure = 0
        this.feel_like = 0
        this.wind = 0
    }
}
