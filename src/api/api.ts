/* eslint-disable */
import axios from 'axios';

import {
    LoginDataType,
    ForgotPasswordData,
    RegisterDataType,
    ResetPasswordType
} from '../store/reducers/auth-reducer';

let jwtToken = localStorage.getItem('jwtToken')
console.log(jwtToken)
export const instance = axios.create({
    baseURL: 'https://strapi.cleverland.by/api/',
    withCredentials: true,
    headers:{
        Authorization: `Bearer ${jwtToken? jwtToken : ''}`
    }

})

// axios.interceptors.response.use((response) =>{
//     console.log(response)
//     return response
// },  (error) =>{
//     const b = 1
//     return Promise.reject(error)
// })
instance.interceptors.request.use(
    (config) => {
        let jwt = localStorage.getItem('jwtToken') as string
        jwtToken = jwt
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);
console.log(jwtToken)

instance.interceptors.response.use(

    function (response) {
        console.log(response.data.jwt)
        if(response.data.jwt !== undefined){
            localStorage.setItem('jwtToken', response.data.jwt)
        }

        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);





export const booksApi = {
    getAllBooks: ()=>instance.get('books'),
    getBook: (id: string) => instance.get(`books/${id}`),
    getAllCategories: () => instance.get('categories')
}

export const authApi = {
    register: (registerData: RegisterDataType)=> instance.post('auth/local/register',
        {...registerData}
    ),
    auth: ()=> instance.post('auth/local', {}),
    login: (authData: LoginDataType)=> instance.post('auth/local', {...authData}),
    forgotPassword: (forgotPasswordData: ForgotPasswordData)=> instance.post('auth/forgot-password'),
    resetPassword: (resetPassword: ResetPasswordType) => instance.post('auth/reset-password')

}
