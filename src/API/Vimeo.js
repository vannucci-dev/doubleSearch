import axios from 'axios';

const KEY =`eb382ad1062cb3ccdb16e804315d5a66`;



export default axios.create({
    baseURL: 'https://api.vimeo.com',
    params:{
        access_token: KEY,
        page: 1,
        per_page: 5,
        sort: 'relevant'
    }
});