/* eslint-disable */
import React from 'react';

import emptyCat from '../../../assets/svg/emptyCat.svg'
import {Rating} from '../rating';
import {
    AllBooksType,
} from "../../../store/reducers/book-reducer";
import {useAppSelector} from "../../../store/store";

export type AuthorType = {
    id: number
    author: string
}

type LineItemProps = {
    book: AllBooksType
}

export const LineItem = React.memo((props: LineItemProps) => {
        const {book} = props
        const searchData = useAppSelector(state => state.app.searchData)

        const createMarkup = (html: string) => {
            return {__html: html}
        }
        return (
            <div className="common-item-container line-item-container" data-test-id="card">
                <div>
                    {book.image
                        ? <img src={'https://strapi.cleverland.by' + book.image.url} alt="book"
                               className="book-image"/>
                        : <img src={emptyCat} alt="book" className="book-image"/>
                    }

                </div>
                <div className="book line-book">
                    <div className="title-book-line-container">
                        <div className="title-book-line">
                            {searchData?
                                <div dangerouslySetInnerHTML={createMarkup(book.title)}></div>
                                : book.title}
                        </div>
                        <div className="author-book author-book-line">
                            {book.authors.map((author, index) => <div key={index}>{author}</div>)}
                        </div>
                    </div>

                    <div className="button-reserve-container-line">
                        <Rating rating={book.rating} classname="rating-container-line"/>
                        {!book.booking
                            ?
                            <button type="button"
                                    className="button-reserve-common button-reserve-line">ЗАБРОНИРОВАТЬ</button>
                            : book.booking ?
                                <button type="button"
                                        className="button-reserve-common button-reserve-line reserve">ЗАБРОНИРОВАНО</button>
                                : <button type="button"
                                          className="button-reserve-common button-reserve-line reserve reverse-date">дата</button>
                        }
                    </div>

                </div>
            </div>

        )
    }
)
