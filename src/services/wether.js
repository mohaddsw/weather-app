import axios from '../plugins/axios'
// eslint-disable-next-line import/no-anonymous-default-export

    const weathe={
        httpsGetWeather(cityName,keyId){
            return axios({
                method:'GET',
                url:`/data/2.5/weather?q=${cityName}&units=metric&appid=${keyId}`
            })
        }
    }
    export default weathe

