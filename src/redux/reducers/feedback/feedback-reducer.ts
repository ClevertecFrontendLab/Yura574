import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {setIsPending} from '@redux/reducers/common-reducer.ts';
import {feedbackApi} from '../../../api/api.ts';
import {push} from 'redux-first-history';
import {path} from '../../../routers/routers.tsx';
import {responseStatus} from '../../../api/statuses.ts';
import {logout} from '@redux/reducers/auth/auth-reducer.ts';

type ReviewType = {
    id: number
    fullName: string | null
    imgSrc: string | null
    message: string
    rating: number
    createdAt: string
}

type InitialState = {
    isWrong: boolean
    reviews: ReviewType[]
}

const initialState: InitialState = {
    isWrong: false,
    reviews: []
}


export const getFeedback = createAsyncThunk(
    'feedback/getFeedback',
    async (data: boolean, {dispatch}) => {

        dispatch(setIsPending(true))
        try {
            const allFeedback = await feedbackApi.getAllFeedbacks()
            dispatch(setIsPending(false))
            console.log(allFeedback)
            const sortedFeedback = allFeedback.data.sort((a: ReviewType,b: ReviewType)=> a.createdAt < b.createdAt ? 1: -1)

            dispatch(setReviews(sortedFeedback))
        } catch (error: any) {
            console.log(error)
            dispatch(setIsPending(false))
            if (+error.response.status == responseStatus.Forbidden) {
                dispatch(logout())
                dispatch(push(path.login))
            } else {
                dispatch(push(path.main))
            }

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
        }
    }
})


export const {setIsModalWrong, setReviews} = feedBackSlice.actions

export const feedbackReducer = feedBackSlice.reducer
