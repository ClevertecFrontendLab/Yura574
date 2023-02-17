/* eslint-disable */
import React, {useCallback, useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import {SortingItems} from './main-section/sorting-items';
import {LineItem} from './main-section/view-items/line-item';
import {SquareItem} from './main-section/view-items/square-item';
import {useAppDispatch, useAppSelector} from '../store/store';
import {AllBooksType, getAllBooks, getAllCategories} from '../store/reducers/book-reducer';


export const MainSection = React.memo(() => {


    const dispatch = useAppDispatch()
    const books = useAppSelector(state => state.books.allBooks)
    const error = useAppSelector(state => state.app.error)
    const categories = useAppSelector(state => state.books.categories)

    const [viewItems, setViewItems] = useState('block')

    useEffect(() => {
        if (books.length === 0) {
            dispatch(getAllBooks())
        }

    }, [dispatch])
    useEffect(() => {
        if (categories.length === 0) {
            dispatch(getAllCategories())
        }

    }, [dispatch])
    const changeView = useCallback((view: string) => {
        setViewItems(view)
    }, [])

    return (
        <div>{error ? false : <div>

            <SortingItems changeView={changeView} view={viewItems}/>
            <div
                className={viewItems === 'block' ? 'items-container-block' : 'items-container-line'}>
                {!error && books.map((book: AllBooksType) =>

                    <div key={book.id}>
                        {viewItems === 'block'

                            ? <NavLink to={`/books/all/${book.id}`}><SquareItem
                                id={book.id}
                                categories={book.categories}
                                delivery={book.delivery}
                                histories={book.histories}
                                issueYear={book.issueYear}
                                data-test-id='card'
                                title={book.title}
                                authors={book.authors}
                                image={book.image}
                                rating={book.rating}
                                booking={book.booking}
                            /></NavLink>
                            : <NavLink to={`/books/all/${book.id}`}> <LineItem
                                id={book.id}
                                categories={book.categories}
                                delivery={book.delivery}
                                histories={book.histories}
                                issueYear={book.issueYear}
                                data-test-id='card'
                                title={book.title}
                                authors={book.authors}
                                image={book.image}
                                rating={book.rating}
                                booking={book.booking}
                            />
                            </NavLink>
                        }
                    </div>
                )}
            </div>

        </div>
        }</div>
    )
})

