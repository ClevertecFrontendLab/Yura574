/* eslint-disable */
import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {setError, setIsToggleMenu} from '../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../store/store';

import {Loader} from './common-components/loader';
import {BookPage} from './book-page';
import {Footer} from './footer';
import {Header} from './header';
import {Main} from './main';
import {Rules} from "./main-section/rules";
import {ContractOffer} from "./main-section/contract-offer";
import {getAllBooks, getAllCategories, setCountsBook} from "../store/reducers/book-reducer";


export const App = React.memo(() => {


    const dispatch = useAppDispatch()

    const isToggleMenu = useAppSelector(state => state.app.isToggleMenu)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const categories = useAppSelector(state => state.books.categories)
    const books = useAppSelector(state => state.books.allBooks)
    const error = useAppSelector(state => state.app.error)
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
    useEffect(()=>{
        if(books.length !== 0 && categories.length !== 0 ){
            categories.map(cat => {
                const booksCount = books.filter(el => el.categories[0] === cat.name)
                dispatch(setCountsBook({category: cat.name, count: booksCount.length}))
            })
        }
    },[dispatch, books, categories])


    const closeToggleMenu = () => {
        isToggleMenu && dispatch(setIsToggleMenu(false))
    }

    return (
        <div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'}
             onClick={closeToggleMenu}>
            {isLoading && <Loader/>}
            <Header/>
            <Routes>
                < Route path="/" element={<Navigate to="books/all"/>}/>
                <Route path="books/:category/" element={<Main/>}/>
                <Route path="/books/:category/:id" element={<BookPage/>}/>
                <Route path="/rules" element={<Rules/>}/>
                <Route path="/contract-offer" element={<ContractOffer/>}/>
            </Routes>

            <Footer/>
            <Loader/>
        </div>

    )

})
