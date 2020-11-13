import * as axios from 'axios';

export const Ajax = axios.create({

    baseURL: 'http://localhost:8080/'

})