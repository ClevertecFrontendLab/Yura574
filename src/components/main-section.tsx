/* eslint-disable */
import React, {useCallback, useEffect, useState} from 'react';

import {SortingItems} from './main-section/sorting-items';
import {useAppDispatch, useAppSelector} from '../store/store';
import {ItemsMainSection} from "./main-section/items-main-section";
import {AllBooksType} from "../store/reducers/book-reducer";
import {useParams} from "react-router-dom";
import {isSortByRating} from "../store/reducers/app-reducers";


export const MainSection = React.memo(() => {
    const dispatch = useAppDispatch()
    const books = useAppSelector(state => state.books.allBooks)
    const error = useAppSelector(state => state.app.error)

    const [ratingBooks, setRatingBooks] = useState<AllBooksType[]>([])
    const [viewItems, setViewItems] = useState('block')
    const categories = useAppSelector(state => state.books.categories)
    const sortByRating = useAppSelector(state => state.app.sortByRating)

    const {category} = useParams()
    const currentCategory = category && categories.filter(el => el.path === category)
    let showBooks = books
    if (currentCategory && currentCategory.length !== 0) {
        showBooks = currentCategory && books.filter(el => el.categories[0] === currentCategory[0].name)
    }
    console.log(showBooks)
    useEffect(() => {
        function arraysEqual(arr1: AllBooksType[], arr2: AllBooksType[]) {
            return arr1.length === arr2.length && arr1.every((value: AllBooksType, index: number) => value === arr2[index]);
        }
       const equal = arraysEqual(showBooks, ratingBooks)
        console.log(equal)
        if (!equal) {
            setRatingBooks(showBooks)
        }
    }, [showBooks])


    const setBooksHandler = useCallback((sort: boolean) => {
    dispatch(isSortByRating(!sort))

    }, [])

    // useEffect(() => {
    //             const newArr = [...ratingBooks]
    //     let sortArr = newArr.sort((a, b) => a.rating - b.rating)
    //
    //     sortByRating ? setRatingBooks(sortArr) : setRatingBooks(sortArr.reverse())
    // }, [sortByRating])


    const changeView = useCallback((view: string) => {
        setViewItems(view)
    }, [])
    return (
        <div>
            {!error && <div>
                <SortingItems changeView={changeView}
                              view={viewItems}
                              sortByRating = {sortByRating}
                              setBooksHandler={setBooksHandler}
                              ratingBooks={ratingBooks}
                />
                <ItemsMainSection error={error}
                                  ratingBooks={ratingBooks}
                                  viewItems={viewItems}

                />
            </div>
            }
        </div>
    )
})

