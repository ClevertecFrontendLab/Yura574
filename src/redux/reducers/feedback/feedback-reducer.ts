import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setIsPending} from '@redux/reducers/common-reducer.ts';
import {feedbackApi} from '../../../api/api.ts';
import {push} from 'redux-first-history';
import {path} from '../../../routers/routers.tsx';
import {responseStatus} from '../../../api/statuses.ts';
import {logout} from '@redux/reducers/auth/auth-reducer.ts';
import {AxiosError} from 'axios';

export type ReviewType = {
    id: number
    fullName: string | null
    imgSrc: string | null
    message: string
    rating: number
    createdAt: string
}
type CreateFeedbackType = {
    rating: number,
    message?: string
}

type InitialState = {
    isWrong: boolean
    isSuccess: boolean
    isError: boolean
    isOpenWriteReviewModal: boolean
    reviews: ReviewType[]
}

const initialState: InitialState = {
    isWrong: false,
    isError: false,
    isSuccess: false,
    isOpenWriteReviewModal: false,

    reviews: []
}


export const getFeedback = createAsyncThunk(
    'feedback/getFeedback',
    async (_, {dispatch}) => {

        dispatch(setIsPending(true))
        try {
            const allFeedback = await feedbackApi.getAllFeedbacks()
            dispatch(setIsPending(false))
            const sortedFeedback = allFeedback.data.sort((a: ReviewType, b: ReviewType) => a.createdAt < b.createdAt ? 1 : -1)

            dispatch(setReviews(sortedFeedback))
        } catch (error) {
            const errors = error as AxiosError;
            dispatch(setIsPending(false))

            if (Number(errors.response?.status) == responseStatus.Forbidden) {
                dispatch(logout())
                dispatch(push(path.login))

            } else {
                dispatch(setIsModalWrong(true))
            }

        }

    })
export const createFeedback = createAsyncThunk('feedback/createFeedback', async (data: CreateFeedbackType, {dispatch}) => {
    dispatch(setIsPending(true))
    try {
        const {rating, message} = data

        await feedbackApi.createFeedback({rating, message})



            sessionStorage.removeItem('review')
            sessionStorage.removeItem('rating')
            dispatch(setIsPending(false))
            dispatch(setIsModalSuccess(true))



    } catch (error) {
        dispatch(setIsPending(false))
        dispatch(setIsModalError(true))
    }

})


const feedBackSlice = createSlice({
    name: 'feedback-reducer',
    initialState,
    reducers: {
        setIsModalWrong: (state, action) => {
            state.isWrong = action.payload
        },
        setReviews: (state, action) => {
            state.reviews = action.payload
        },
        setIsModalSuccess: (state, action) => {
            state.isSuccess = action.payload
        },
        setIsModalError: (state, action) => {
            state.isError = action.payload
        },

        setIsOpenWriteReviewModal: (state, action) => {
            state.isOpenWriteReviewModal = action.payload
        },


    }
})


export const {
    setIsModalWrong,
    setIsModalSuccess,
    setIsModalError,
    setReviews,
    setIsOpenWriteReviewModal,
} = feedBackSlice.actions

export const feedbackReducer = feedBackSlice.reducer
