/* eslint-disable */
import React, {useCallback, useEffect, useState} from 'react';

import {SortingItems} from './main-section/sorting-items';
import {useAppDispatch, useAppSelector} from '../store/store';
import {ItemsMainSection} from "./main-section/items-main-section";
import {AllBooksType, CategoryType} from "../store/reducers/book-reducer";
import {useParams} from "react-router-dom";
import {isSortByRating, setInputSortValue, setSearchData} from "../store/reducers/app-reducers";


export const MainSection = React.memo(() => {
    const dispatch = useAppDispatch()
    const books = useAppSelector(state => state.books.allBooks)
    const error = useAppSelector(state => state.app.error)


    const [ratingBooks, setRatingBooks] = useState<AllBooksType[]>([])
    const [viewItems, setViewItems] = useState('block')

    const categories = useAppSelector<CategoryType[]>(state => state.books.categories)
    const sortByRating = useAppSelector(state => state.app.sortByRating)
    const searchData = useAppSelector(state => state.app.searchData)
    const inputSortValue = useAppSelector(state => state.app.inputSortValue)


    const {category} = useParams()
    const currentCategory = category && categories.length > 0 && categories.filter(el => el.path === category)
    let showBooks = books

    function arraysEqual(arr1: AllBooksType[], arr2: AllBooksType[]) {
        return arr1.length === arr2.length && arr1.every((value: AllBooksType, index: number) => JSON.stringify(value) === JSON.stringify(arr2[index]));
    }

    if (currentCategory && currentCategory.length !== 0) {
        showBooks = currentCategory && books.filter(el => el.categories[0] === currentCategory[0].name)
    }

    useEffect(() => {
        if (inputSortValue) {
                const newArr = showBooks
                    .filter(book => book.title.toLowerCase().includes(inputSortValue.toLowerCase()))
                    .map(book => {
                        let newTitle = book.title.replace(
                            new RegExp(inputSortValue, 'gi'),
                            match => `<mark class="highlights">${match}</mark>`
                        )
                        return {...book, title: newTitle}
                    })

              const equal = arraysEqual(newArr, ratingBooks)
            if(!equal){
                setRatingBooks(newArr)
            }
        } else {
            const equal = arraysEqual(showBooks, ratingBooks)
            if (!equal && !inputSortValue) {
                setRatingBooks(showBooks)
            }
        }

    }, [showBooks,ratingBooks])


    useEffect(() => {
        setRatingBooks(searchData)
    }, [inputSortValue])

    const setBooksHandler = useCallback((sort: boolean) => {
        dispatch(isSortByRating(!sort))
    }, [])

    const handleInputSort = (value: string) => {
        dispatch(setInputSortValue(value))
        const newArr = showBooks
            .filter(book => book.title.toLowerCase().includes(value.toLowerCase()))
            .map(book => {
                let newTitle = book.title.replace(
                    new RegExp(value, 'gi'),
                    match => `<mark class="highlights"><span   >${match}</span></mark>`
                )
                return {...book, title: newTitle}
            })
        dispatch(setSearchData(newArr))
    }

    const changeView = useCallback((view: string) => {
        setViewItems(view)
    }, [])

    return (
        <div>
            {!error && <div>
                <SortingItems changeView={changeView}
                              view={viewItems}
                              sortByRating={sortByRating}
                              setBooksHandler={setBooksHandler}
                              ratingBooks={ratingBooks}
                              handleInputSort={handleInputSort}

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

