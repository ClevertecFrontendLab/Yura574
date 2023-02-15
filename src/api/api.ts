import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://strapi.cleverland.by/',
    withCredentials: true,

})




export const booksApi = {
    getAllBooks: ()=>instance.get('api/books'),
    getBook: (id: string) => instance.get(`api/books/${id}`),
    getAllCategories: () => instance.get('api/categories')
}
