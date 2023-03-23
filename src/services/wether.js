import axios from 'axios'

    const weather={
        httpsGetWeather(data){
            return axios({
                method:'get',
                url:`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&appid=${data.apiKey}`
            })
        }
    }
    export default weather

