/* eslint-disable */
import {createAsyncThunk, createSlice, Dispatch} from "@reduxjs/toolkit";
import {booksApi} from "../../api/api";
import {setError, setIsLoading} from "./app-reducers";

export type AllBooksType = {
    issueYear: string
    rating: number
    title: string
    authors: string[]
    image: { url: string }
    categories: string[]
    id: number
    booking: BookingType | null
    delivery: DeliveryType | null
    histories: HistoriesType | null
}
export type BookType = {
    id: number,
    title: string,
    rating: string,
    issueYear: string,
    description: string,
    publish: string,
    pages: string,
    cover: string,
    weight: string,
    format: string,
    ISBN: string,
    producer: string,
    authors: string[],
    images: { url: string }[],
    categories: string[],
    comments: CommentType[],
    booking: BookingType,
    delivery: DeliveryType,
    histories: HistoriesType,

}
export type CommentType = {
    id: number,
    rating: number,
    text: string
    createdAt: string,
    user: CommentUserType
}
export type CommentUserType = {
    commentUserId: number,
    firstName: string,
    lastName: string,
    avatarUrl: string

}
export type BookingType = {
    id: number,
    order: boolean,
    dateOrder: string,
    customerId: number,
    customerFirstName: string,
    customerLastName: string
}
export type DeliveryType = {
    id: number,
    handed: boolean,
    dateHandedFrom: string,
    dateHandedTo: string,
    recipientId: number,
    recipientFirstName: string,
    recipientLastName: string
}
export type HistoriesType = { id: number, userId: number }[]
export type CategoryType = {
    id: number
    name: string
    path: string
}
type InitialStateType = {
    allBooks: AllBooksType[]
    book: BookType
    categories: CategoryType[]
}
const initialState: InitialStateType = {
    allBooks: [],
    book: {
        id: 0,
        title: '',
        categories: [],
        pages: '',
        format: '',
        ISBN: '',
        weight: '',
        cover: '',
        issueYear: '',
        publish: '',
        rating: '',
        booking: {
            id: 0,
            customerFirstName: '',
            customerLastName: '',
            customerId: 0,
            order: false,
            dateOrder: ''
        },
        description: '',
        authors: [],
        delivery: {
            id: 0,
            dateHandedFrom: '',
            handed: false,
            dateHandedTo: '',
            recipientFirstName: '',
            recipientId: 0,
            recipientLastName: ''
        },
        histories: [],
        comments: [],
        images: [],
        producer: ''



    },
    categories: [],

};


export const getAllCategories = createAsyncThunk('books/getCategories', async (arg, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true))
    try {
        const res = await booksApi.getAllCategories()
        return res.data
    } catch (e) {
        thunkAPI.dispatch(setIsLoading(false))
        const error = {
            "data": null,
            "error": {
                "status": 401,
                "name": 'string',
                "message": 'string',
                "details": {}
            }
        }
        return thunkAPI.dispatch(setError(error))
    }
})
export const getAllBooks = createAsyncThunk('books/getAllBooks', async (arg, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true))
    try {
        const res = await booksApi.getAllBooks()
        return res.data
    } catch (e) {
        thunkAPI.dispatch(setIsLoading(false))
        const error = {
            "data": null,
            "error": {
                "status": 401,
                "name": 'string',
                "message": 'string',
                "details": {}
            }
        }
        return thunkAPI.dispatch(setError(error))
    }
})
export const getBook = createAsyncThunk('books/getBook', async (id: string, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true))
    try {
        const res = await booksApi.getBook(id)
        return res.data
    } catch (e) {
        thunkAPI.dispatch(setIsLoading(false))
        const error = {
            "data": null,
            "error": {
                "status": 401,
                "name": 'string',
                "message": 'string',
                "details": {}
            }
        }
        return thunkAPI.dispatch(setError(error))
    }
})

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBook: (state, action) => {
            state.book = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                state.allBooks = action.payload
            })
            .addCase(getBook.fulfilled, (state, action) => {
                state.book = action.payload
            })
    }
});

export const {setBook} = booksSlice.actions;

export const booksReducer = booksSlice.reducer;


export const getSuccessBookId = (id: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    booksApi.getBook(id)
        .then(res => {
            console.log(res.data)
            dispatch(setBook(res.data))
        })
        .catch(() => {
            dispatch(setError({
                    "data": null,
                    "error": {
                        "status": 401,
                        "name": 'string',
                        "message": 'string',
                        "details": {}
                    }
                }
            ))
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })
}
