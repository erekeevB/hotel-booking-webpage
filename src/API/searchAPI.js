import {Ajax} from './axiosCreater';

export const getCityListAPI = () => {

    return Ajax.get('/hotel/cities').then(data=>data.data)

}

export const getSearchResultAPI = (form) => {

    return Ajax.get('/hotel/cities', {...form}).then(data=>data.data)

}