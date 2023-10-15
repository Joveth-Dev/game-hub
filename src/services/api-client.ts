import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '73d9b13da5f942578850c3355de60333'
    }
})