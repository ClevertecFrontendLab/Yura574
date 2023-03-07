/* eslint-disable */
import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useParams} from 'react-router-dom';

import {setCurrentCategory, setIsLoading} from '../../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {useWindowSize} from '../../utils/utils';

import {ContractOffer} from './main-section/contract-offer';
import {MainSection} from './main-section/main-section';
import {Navbar} from './main-section/navbar';
import {Rules} from './main-section/rules';
import {BookPage} from './book-page';
import {
    CategoryType,
    getAllBooks,
    getAllCategories, getAllCategoriesAndBooks,
    setCountsBook
} from '../../store/reducers/book-reducer';

export const Main = () => {
            const dispatch = useAppDispatch()
        const categories = useAppSelector<CategoryType[]>(state => state.books.categories)
        const books = useAppSelector(state => state.books.allBooks)
        const isAuth = useAppSelector(state => state.auth.isAuth)

        const {category} = useParams()
        const size = useWindowSize()

        useEffect(() => {
            category && dispatch(setCurrentCategory(category))
        }, [dispatch, category])

    useEffect(() => {
        if (localStorage.getItem('jwtToken') !== null && books.length === 0 && categories.length === 0 ) {
            console.log(localStorage.getItem('jwtToken'))
            // dispatch(getAllCategories())
            dispatch(setIsLoading(true))
            // dispatch(getAllCategories())
            dispatch(getAllCategoriesAndBooks())
            // dispatch(getAllBooks())

        }
    }, [])

        useEffect(() => {
            if (books.length > 0 && categories.length > 0) {
                categories && categories.map(cat => {
                    const booksCount = books && books.filter(el => el.categories[0] === cat.name)
                    dispatch(setCountsBook({category: cat.name, count: booksCount.length}))
                })
            }
        }, [dispatch, books, categories])

    if(!isAuth) return <Navigate to={'/authorization/login'}/>

        return (
            <main className="layout-main-page main_wrapper">


                <section className=" main_wrapper">
                    {size.width > 768 && < Navbar sidebar={false}
                                                  showcase="navigation-showcase"
                                                  books="navigation-books"
                                                  terms="navigation-terms"
                                                  contract="navigation-contract"
                                                  dataTestId="navigation"
                    />}
                    <Routes>
                        <Route path="/" element={<Navigate to="/books/all"/>}/>
                        <Route path="/books/:category/" element={<MainSection/>}/>
                        <Route path="/books/:category/:id" element={<BookPage/>}/>
                        <Route path="/rules" element={<Rules/>}/>
                        <Route path="/contract-offer" element={<ContractOffer/>}/>
                    </Routes>


                </section>
            </main>
        )
    }
;
