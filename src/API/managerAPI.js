import {Ajax} from './axiosCreater';

export const getEmployeesAPI = () => {

    return Ajax.get('/admin/getallemployees').then(data=>data.data)

}

export const addEmployeeAPI = (form) => {

    return Ajax.get('/admin/addemployee', {...form}).then(data=>data.data)

}

export const deleteEmployeeAPI = (id) => {

    return Ajax.get('/admin/deleteemployee/?id='+id).then(data=>data.data)

}

export const getSeasonsAPI = (hotelId) => {

    return Ajax.get('/season/getseasonsforhotel/'+hotelId).then(data=>data.data)

}

// export const addEmployeeAPI = (form) => {

//     return Ajax.get('/season/addemployee', {...form}).then(data=>data.data)

// }

// export const deleteEmployeeAPI = (id) => {

//     return Ajax.get('/season/deleteemployee/?id='+id).then(data=>data.data)

// }