import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {authReducer} from '@redux/reducers/auth/auth-reducer.ts';
import {commonReducer} from '@redux/reducers/common-reducer.ts';
import {createBrowserHistory} from 'history';
import {createReduxHistoryContext} from 'redux-first-history';
import {checkEmailReducer} from '@redux/reducers/auth/checkEmail-reducer.ts';
import {changePasswordReducer} from '@redux/reducers/auth/changePassword-reducer.ts';
import {feedbackReducer} from '@redux/reducers/feedback/feedback-reducer.ts';


const {
    routerMiddleware,
    routerReducer,
    createReduxHistory
} = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1
})

const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    checkEmail: checkEmailReducer,
    router: routerReducer,
    changePassword: changePasswordReducer,
    feedback: feedbackReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(routerMiddleware)
});

export const history = createReduxHistory(store)

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch


// @ts-ignore
window.store = store

