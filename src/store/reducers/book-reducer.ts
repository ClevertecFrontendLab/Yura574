/* eslint-disable */
import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {booksApi} from "../../api/api";
import {ErrorType, setError, setIsLoading} from "./app-reducers";

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
    error: ErrorType | null
    allBooks: AllBooksType[]
    book: BookType | null
    categories: CategoryType[] | null
}
const initialState: InitialStateType = {
    allBooks: [],
    book: null,
    categories: null,
    error: null
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
export const getAllBooks = createAsyncThunk('books/getBooks', async (arg, thunkAPI) => {
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

// export const getAllBooks = createAsyncThunk('books/getAllBooks', (arg, thunkAPI) => {
//     thunkAPI.dispatch(setIsLoading(true))
//     booksApi.getAllBooks()
//         .then((res) => {
//             console.log()
//             thunkAPI.dispatch(setAllBooks(res.data))
//         })
//         .catch(err => {
//             thunkAPI.dispatch(setError({
//                     "data": null,
//                     "error": {
//                         "status": 401,
//                         "name": 'string',
//                         "message": 'string',
//                         "details": {}
//                     }
//                 }
//             ))
//         })
//         .finally(() => {
//             thunkAPI.dispatch(setIsLoading(false))
//         })
//
// })
const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // setAllBooks: (state, action: PayloadAction<AllBooksType[]>) => {
        //     state.allBooks = action.payload
        // },
        setBook: (state, action: PayloadAction<BookType>) => {
            state.book = action.payload
        },
        // setCategories: (state, action: PayloadAction<CategoryType[]>) => {
        //     state.categories = action.payload
        // }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                state.allBooks = action.payload
            })



    }
});

export const {setBook} = booksSlice.actions;

export const booksReducer = booksSlice.reducer;

//
// export const getAllBooksTC = () => (dispatch: Dispatch) => {
//     dispatch(setIsLoading(true))
//     booksApi.getAllBooks()
//         .then(res => {
//             dispatch(setAllBooks(res.data))
//
//         })
//         .catch(err => {
//             dispatch(setError({
//                     "data": null,
//                     "error": {
//                         "status": 401,
//                         "name": 'string',
//                         "message": 'string',
//                         "details": {}
//                     }
//                 }
//             ))
//         })
//         .finally(() => {
//             dispatch(setIsLoading(false))
//         })
// }
//
export const getSuccessBookId = (id: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    booksApi.getBook(id)
        .then(res => {
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
//
// export const getCategoriesTC = () => (dispatch: Dispatch) => {
//     dispatch(setIsLoading(true))
//     booksApi.getAllCategories()
//         .then((res) => {
//             dispatch(setCategories(res.data))
//         })
//         .catch(err => {
//             dispatch(setError({
//                     "data": null,
//                     "error": {
//                         "status": 401,
//                         "name": 'string',
//                         "message": 'string',
//                         "details": {}
//                     }
//                 }
//             ))
//         })
//         .finally(() => {
//             dispatch(setIsLoading(false))
//         })
// }
