import axios from 'axios';

import {
    LoginDataType,
    ForgotPasswordData,
    RegisterDataType,
    ResetPasswordType
} from '../store/reducers/auth-reducer';

export const instance = axios.create({
    baseURL: 'https://strapi.cleverland.by/api/',
    withCredentials: true,
    headers:{
        // Authorization: `Bearer ${jwtToken}`
    }

})





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
