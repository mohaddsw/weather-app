import axios from '../plugins/axios'

    const weathe={
        httpsGetWeather(data){
            return axios({
                method:'GET',
                url:`/data/2.5/weather?q=${data.city}&units=metric&appid=${data.apiKey}`
            })
        }
    }
    export default weathe

