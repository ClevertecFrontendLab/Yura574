import book from '../assets/png/algorithm-445-594.png';
import image from '../assets/png/algorithm-book.png';

import {SlideType} from './book-page';

 export type BookType = {
    id: number
    category: CategoryType
    title: string
    img: string
    author: AuthorType[]
    rating: number
    reservation: boolean | string
}
export type AuthorType = {
    id: number
    author: string
}
export type CategoryType = {
    id: number
    title: string
}
type ReviewStateType = {
    id: number
    name: string
    data: string
    rating: number
    review?: string
}

type InitialStateType = {
    state: BookType[]
    reviewState: ReviewStateType[]
    reservation: string | boolean
    arrSlidesFirst: SlideType[]
    arrSlidesSecond: SlideType[]
    arrSlidesThird: SlideType[]
}
export const initialState: InitialStateType = {
    state: [
        // {
        //     id: 1,
        //     category: {
        //         id: 1,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих",
        //     author: [{ id: 1, author: "Адитья Бхаргава, 2019" }],
        //     img: image,
        //     rating: 0,
        //     reservation: false
        // },
        // {
        //     id: 2,
        //     category: {
        //         id: 2,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы. Иллюстрированное",
        //     author: [{ id: 1, author: "Адитья Бхаргава, 2019" }],
        //     img: image,
        //     rating: 4,
        //     reservation: false
        // },
        // {
        //     id: 3,
        //     category: {
        //         id: 3,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы.",
        //     author: [{ id: 1, author: "Адитья Бхаргава, 2019" }],
        //     img: image,
        //     rating: 4,
        //     reservation: "занята до 03.05"
        // },
        // {
        //     id: 4,
        //     category: {
        //         id: 1,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы. Иллюстрированное пособие для програмистов",
        //     author: [{ id: 1, author: "Адитья Бхаргава, 2019" }],
        //     img: image,
        //     rating: 4,
        //     reservation: false
        // },
        // {
        //     id: 5,
        //     category: {
        //         id: 1,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы. Иллюстрированное пособие для програмистов",
        //     author: [
        //         { id: 1, author: "Адитья Бхаргава, 2019" },
        //         { id: 2, author: "Патрик Нимейер, 2019" }
        //     ],
        //     img: image,
        //     rating: 4,
        //     reservation: true
        // },
        // {
        //     id: 6,
        //     category: {
        //         id: 5,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы. Иллюстрированное",
        //     author: [
        //         { id: 1, author: "Адитья Бхаргава, 2019" },
        //         { id: 2, author: "Патрик Нимейер, 2019" }
        //     ],
        //     img: "",
        //     rating: 0,
        //     reservation: "занята до 23.04"
        // },
        // {
        //     id: 7,
        //     category: {
        //         id: 1,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы.",
        //     author: [
        //         { id: 1, author: "Адитья Бхаргава, 2019" },
        //         { id: 2, author: "Патрик Нимейер, 2019" }
        //     ],
        //     img: image,
        //     rating: 4,
        //     reservation: false
        // },
        // {
        //     id: 8,
        //     category: {
        //         id: 1,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы. Иллюстрированное пособие для програмистов",
        //     author: [
        //         { id: 1, author: "Адитья Бхаргава, 2019" },
        //         { id: 2, author: "Патрик Нимейер, 2019" }
        //     ],
        //     img: image,
        //     rating: 4,
        //     reservation: false
        // },
        // {
        //     id: 9,
        //     category: {
        //         id: 1,
        //         title: "computer-literature"
        //     },
        //     title: "Грокаем алгоритмы. Иллюстрированное пособие для програмистов",
        //     author: [{ id: 1, author: "Адитья Бхаргава, 2019" }],
        //     img: image,
        //     rating: 4,
        //     reservation: false
        // }
        // {
        //     id: 10,
        // category: {
        //      id: 1,
        //      title:'computer-literature'
        //  },
        //     title: 'Грокаем алгоритмы. Иллюстрированное пособие для програмистов',
        //     author: [ { id: 1, author: "Адитья Бхаргава, 2019" }],
        //     img: '',
        //     rating: 4,
        //     reservation: false
        // },
    ],
    reviewState: [
        // { id: 1, name: "Иван Иванов", data: "5 января 2019", rating: 4 },
        // {
        //     id: 2,
        //     name: "Николай Качков",
        //     data: "20 июня 2018",
        //     rating: 4,
        //     review: "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу."
        // },
        // { id: 3, name: "Екатерина Беляева", data: "18 ноября 2018", rating: 4 }
    ],
    arrSlidesFirst: [],
    arrSlidesSecond: [{ id: 1, title: book }],
    arrSlidesThird: [{ id: 1, title: book }, { id: 2, title: book }],
    reservation: false
};


