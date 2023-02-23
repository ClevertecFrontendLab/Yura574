/* eslint-disable */
import React from "react";
import {NavLink, useParams} from "react-router-dom";

import {AllBooksType} from "../../store/reducers/book-reducer";
import {SquareItem} from "./view-items/square-item";
import {LineItem} from "./view-items/line-item";
import {ErrorType} from "../../store/reducers/app-reducers";
import {useAppSelector} from "../../store/store";

type ItemsMainSectionType = {
    error: ErrorType | null
    ratingBooks: AllBooksType[]
    viewItems: string
}

export const ItemsMainSection = React.memo((props: ItemsMainSectionType) => {

    const {error, ratingBooks, viewItems, } = props
    const isLoading = useAppSelector(state => state.app.isLoading)
    const sortByRating = useAppSelector(state => state.app.sortByRating)
    const {category} = useParams()
    let newArr = [...ratingBooks]
    let sortArr = newArr.sort((a, b) => a.rating - b.rating)

    if(sortByRating) sortArr = sortArr.reverse()



    return (
            <div>
                {ratingBooks.length === 0 && !isLoading ?
                    <div className='noBooksInCategory'>В этой категории книг ещё нет</div> : false}

                <div
                    className={viewItems === 'block' ? 'items-container-block' : 'items-container-line'}>
                    {!error &&
                        sortArr.map((book: AllBooksType) =>

                        <div key={book.id}>
                            {viewItems === 'block'

                                ? <NavLink to={`/books/${category}/${book.id}`}><SquareItem
                                    book={book}
                                /></NavLink>
                                : <NavLink to={`/books/${category}/${book.id}`}> <LineItem
                                    book={book}
                                />
                                </NavLink>
                            }
                        </div>
                    )}
                </div>
            </div>
        )

    }
)
