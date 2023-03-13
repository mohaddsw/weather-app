import ax from 'axios'
const keyId=`6d3b35c10c29fe17eb773fdbe64ed49d`
const BaseUrl=`https://api.openweathermap.org/data/2.5/appid=${keyId}`
const axiosInstance = () => {

    const axios = ax.create(
        {
            baseURL:BaseUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
    )
   
    return axios
}

export default axiosInstance