import axios from '../plugins/axios'
// eslint-disable-next-line import/no-anonymous-default-export

    const weathe={
        httpsGetWeather(data){
            return axios({
                method:'GET',
                url:`/data/2.5/weather?q=${data.city}&units=metric&appid=${data.apiKey}`
            })
        }
    }
    export default weathe

