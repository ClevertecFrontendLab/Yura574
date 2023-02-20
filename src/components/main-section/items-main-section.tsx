/* eslint-disable */
import React from "react";
import {NavLink, useParams} from "react-router-dom";

import {AllBooksType} from "../../store/reducers/book-reducer";
import {SquareItem} from "./view-items/square-item";
import {LineItem} from "./view-items/line-item";
import {ErrorType} from "../../store/reducers/app-reducers";
import { useAppSelector} from "../../store/store";

type ItemsMainSectionType = {
    error: ErrorType | null
    books: AllBooksType[]
    viewItems: string

}

export const ItemsMainSection = React.memo((props: ItemsMainSectionType) => {

        const categories = useAppSelector(state => state.books.categories)
        const {category} = useParams()
        const {error, books, viewItems} = props
        const currentCategory = category && categories.filter(el => el.path === category)
        let showBooks = books
        if (currentCategory && currentCategory.length !== 0) {
            showBooks = currentCategory && books.filter(el => el.categories[0] === currentCategory[0].name)

        }

        return (
            <div
                className={viewItems === 'block' ? 'items-container-block' : 'items-container-line'}>
                {!error && showBooks.map((book: AllBooksType) =>

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
        )

    }
)
