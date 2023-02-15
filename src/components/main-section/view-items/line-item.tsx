/* eslint-disable */
import React from 'react';

import emptyCat from '../../../assets/svg/emptyCat.svg'
import {Rating} from '../rating';
import {BookingType, DeliveryType, HistoriesType} from "../../../store/reducers/book-reducer";

export type AuthorType = {
    id: number
    author: string
}

type LineItemProps = {
    issueYear: string
    rating: number
    title: string
    authors: string[]
    image: { url: string }
    categories: string[]
    id: number
    booking: BookingType | null
    delivery: DeliveryType| null
    histories: HistoriesType | null

}

export const LineItem = React.memo((props: LineItemProps) => (
        <div className="common-item-container line-item-container" data-test-id="card">
            <div>
                {props.image
                    ? <img src={'https://strapi.cleverland.by' +props.image.url} alt="book" className="book-image"/>
                    : <img src={emptyCat} alt="book" className="book-image"/>
                }

            </div>
            <div className="book line-book">
                <div className="title-book-line-container">
                    <div className="title-book-line">
                        {props.title}
                    </div>
                    <div className="author-book author-book-line">
                        {props.authors.map((author, index) => <div key={index}>{author}</div>)}
                    </div>
                </div>

                <div className="button-reserve-container-line">
                    <Rating rating={props.rating} classname="rating-container-line"/>
                    {!props.booking
                        ?
                        <button type="button"
                                className="button-reserve-common button-reserve-line">ЗАБРОНИРОВАТЬ</button>
                        : props.booking ?
                            <button type="button"
                                    className="button-reserve-common button-reserve-line reserve">ЗАБРОНИРОВАНО</button>
                            : <button type="button"
                                      className="button-reserve-common button-reserve-line reserve reverse-date">дата</button>
                    }
                </div>

            </div>
        </div>

    )
)
