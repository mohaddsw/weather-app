import ax from 'axios'
const BaseUrl=`https://api.openweathermap.org/`
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

export default axiosInstance()