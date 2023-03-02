/* eslint-disable */
import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {
    isSortByRating,
    setInputSortValue,
    setSearchData
} from '../../../store/reducers/app-reducers';
import {
    AllBooksType,
    CategoryType,
    getAllBooks,
    getAllCategories
} from '../../../store/reducers/book-reducer';
import {useAppDispatch, useAppSelector} from '../../../store/store';

import {ItemsMainSection} from './items-main-section';
import {SortingItems} from './sorting-items';
import {Error} from '../../common-components/error';


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
    const isLoading = useAppSelector(state => state.app.isLoading)

    useEffect(() => {
        if(isLoading){
            if ( categories.length === 0 || books.length === 0) {
                if (books.length === 0) {
                    debugger
                    dispatch(getAllBooks())
                }
                if (categories.length === 0) {
                    dispatch(getAllCategories())
                }
            }
        }

    }, [dispatch, books, categories])

    const {category} = useParams()
    const currentCategory = category && categories.length > 0 && categories.filter(el => el.path === category)
    let showBooks = books

    function arraysEqual(arr1: AllBooksType[], arr2: AllBooksType[]) {
        console.log(arr1)
        if (arr1.length === 0){
            return true
        } else {
            return arr1.length === arr2.length &&
                arr1.every((value: AllBooksType, index: number) => JSON.stringify(value) === JSON.stringify(arr2[index]));
        }

    }

    if (currentCategory && currentCategory.length !== 0) {
        showBooks = currentCategory && books.filter(el => el.categories[0] === currentCategory[0].name)
    }

    useEffect(() => {
        if (inputSortValue) {
            const newArr = showBooks
                .filter(book => book.title.toLowerCase()
                    .includes(inputSortValue.toLowerCase()))
            const equal = arraysEqual(newArr, ratingBooks)

            if (!equal) {
                setRatingBooks(newArr)
            }
        } else {
            const equal = arraysEqual(showBooks, ratingBooks)

            if (!equal) {
                setRatingBooks(showBooks)
            }
        }

    }, [showBooks, ratingBooks])

    console.log(showBooks)
    // useEffect(() => {
    //     setRatingBooks(searchData)
    // }, [ inputSortValue])

    const setBooksHandler = useCallback((sort: boolean) => {
        dispatch(isSortByRating(!sort))
    }, [dispatch])

    const handleInputSort = (value: string) => {
        dispatch(setInputSortValue(value))
        const newArr = showBooks
            .filter(book => book.title.toLowerCase().includes(value.toLowerCase()))
            // .map(book => {
            //     const newTitle = book.title.replace(
            //         new RegExp(value, 'gi'),
            //         match => `<mark class="highlights"><span   >${match}</span></mark>`
            //     )

            //     return {...book, title: newTitle}
            // })

        dispatch(setSearchData(newArr))
    }

    const changeView = useCallback((view: string) => {
        setViewItems(view)
    }, [])

    return (
        <div>
            {error ? <Error/> : false}
            {!error &&
                <div>
                    <SortingItems changeView={changeView}
                                  view={viewItems}
                                  sortByRating={sortByRating}
                                  setBooksHandler={setBooksHandler}
                                  ratingBooks={ratingBooks}
                                  handleInputSort={handleInputSort}
                    />
                    {ratingBooks.length > 0 && <ItemsMainSection error={error}
                                      ratingBooks={ratingBooks}
                                      viewItems={viewItems}
                    />}

                </div>
            }
        </div>
    )
})

