/* eslint-disable */
import React, {useCallback, useEffect, useState} from 'react';

import {SortingItems} from './main-section/sorting-items';
import {useAppDispatch, useAppSelector} from '../store/store';
import { getAllBooks, getAllCategories} from '../store/reducers/book-reducer';
import {ItemsMainSection} from "./main-section/items-main-section";
import {setError} from "../store/reducers/app-reducers";


export const MainSection = React.memo(() => {

    const dispatch = useAppDispatch()
    const books = useAppSelector(state => state.books.allBooks)
    const error = useAppSelector(state => state.app.error)
    const categories = useAppSelector(state => state.books.categories)

    const [viewItems, setViewItems] = useState('block')

    useEffect(() => {
        if (books.length === 0) {
            if (error) {
                dispatch(setError(null))
            }
            dispatch(getAllBooks())
        }
        if (categories.length === 0) {
            if (error) {
                dispatch(setError(null))
            }
            dispatch(getAllCategories())
        }
        if (error && books.length > 0) {

            dispatch(setError(null))
        }

    }, [dispatch])


    const changeView = useCallback((view: string) => {
        setViewItems(view)
    }, [])

    return (
        <div>
            {!error && <div>
                <SortingItems changeView={changeView} view={viewItems}/>
                <ItemsMainSection error={error} books={books} viewItems={viewItems}/>
            </div>
            }
        </div>
    )
})

