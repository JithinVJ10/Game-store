import axios from 'axios';


const instance = axios.create({
    baseURL:'https://www.freetogame.com/'
})

export default instance