export class WeatherData {
    id: string;
    province: string;
    date: string;
    time: string;
    description: string;
    temp: any;
    feel_like: any;
    min_temp: any;
    max_temp: any;
    pressure: any;
    wind: any;
    air_quality: any;
    cloud: any;
    humidity: any;

    constructor(){
        this.id = ""
        this.province = ""
        this.date = ""
        this.time = ""
        this.description = ""
        this.temp = null
        this.min_temp = null
        this.max_temp = null
        this.cloud = null
        this.air_quality = null
        this.humidity = null
        this.pressure = null
        this.feel_like = null
        this.wind = null
    }
}
