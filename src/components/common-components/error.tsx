// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import close from '../../assets/svg/close-icon.svg';
import warning from '../../assets/svg/warning-icon.svg';
import {setError} from '../../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../../store/store';


export const Error = () => {
    const dispatch = useAppDispatch()


    const error = useAppSelector(state => state.app.error)
    const closeWarning = () => {
        dispatch(setError(null))
    }

    return (
        <div>
            {error && <div className='error-container' data-test-id='error'>
                <img className='error-warning-icon' src={warning} alt="warning"/>
                <div className='error-message-container'>
                    <div className='error-message'>Что-то пошло не так. Обновите страницу через
                        некоторое время.
                    </div>
                    <button type='button'
                            className='button-close-warning'
                            onClick={closeWarning}>
                        <img src={close} alt="close"/></button>
                </div>
            </div>}
        </div>

    )
}
