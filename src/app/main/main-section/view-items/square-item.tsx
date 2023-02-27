/* eslint-disable */
import React from 'react';

import emptyCat from '../../../../assets/svg/emptyCat.svg'
import {
    AllBooksType,
} from '../../../../store/reducers/book-reducer';
import {Rating} from '../rating';
import {useAppSelector} from "../../../../store/store";
import {Highlights} from "../../../common-components/highlights";


type SquareItemProps = {
    book: AllBooksType
}

export const SquareItem = React.memo((props: SquareItemProps) => {
    const {book}=props
    const searchData = useAppSelector(state => state.app.searchData)
    const inputSortValue = useAppSelector(state => state.app.inputSortValue)

        return (
            <div data-test-id="card">
                <div className="common-item-container block-item-container">
                    {book.image
                        ? <img src={'https://strapi.cleverland.by' +book.image.url}  className='block-item-main-photo' alt="book"/>
                        : <img src={emptyCat} alt="book"/>
                    }
                    {book.rating > 0
                        ? <Rating rating={book.rating} classname="rating-container-block"/>
                        : <div className="rating-container-block">еще нет оценок</div>}
                    <div className="book-common book-block">
                        <div className="title-book-block">
                            <div >
                                {searchData?
                                    // <div  data-test-id='highlight-matches' dangerouslySetInnerHTML={createMarkup(book.title)} ></div>
                                    <Highlights title={book.title} search={inputSortValue}/>
                                    : book.title}

                            </div>

                        </div>
                        <div className="author-book">
                            {book.authors.map((author,index) => <div key={index}>{author}</div>)}
                        </div>
                    </div>
                    {!book.booking
                        ? <button type="button"
                                  className="button-reserve-common button-reserve-block button-block">ЗАБРОНИРОВАТЬ</button>
                        : book.booking ?
                            <button type="button"
                                    className="
                                    button-reserve-common
                                    button-reserve-block
                                     button-block
                                     reserve">ЗАБРОНИРОВАНО</button>
                            : <button type="button"
                                      className="button-reserve-common
                                      button-reserve-block
                                      reserve
                                      reverse-date
                                      button-block
                                      ">дата</button>
                    }

                </div>
            </div>

        )
    }
)
