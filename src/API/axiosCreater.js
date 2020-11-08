import * as axios from 'axios';

export const Ajax = axios.create({

    baseURL: 'localhost:8080/'

})