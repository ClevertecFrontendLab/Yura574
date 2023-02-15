/* eslint-disable */
import React from 'react';

import emptyCat from '../../../assets/svg/emptyCat.svg'
import {
    BookingType,
    DeliveryType,
    HistoriesType
} from '../../../store/reducers/book-reducer';
import {Rating} from '../rating';


type SquareItemProps = {
    issueYear: string
    rating: number
    title: string
    authors: string[]
    image:  {url:string}
    categories: string[]
    id: number
    booking: BookingType | null
    delivery: DeliveryType| null
    histories: HistoriesType | null
}

export const SquareItem = React.memo((props: SquareItemProps) => {
        const cutText = (text: string) => {
            if (text.length > 54) {
                const str = text.slice(0, 54);
                const threeDots = '...'

                return str + threeDots;
            }

            return text

        }


        return (
            <div data-test-id="card">
                <div className="common-item-container block-item-container">
                    {props.image
                        ? <img src={'https://strapi.cleverland.by' +props.image.url}  className='block-item-main-photo' alt="book"/>
                        : <img src={emptyCat} alt="book"/>
                    }
                    {props.rating > 0
                        ? <Rating rating={props.rating} classname="rating-container-block"/>
                        : <div className="rating-container-block">еще нет оценок</div>}
                    <div className="book-common book-block">
                        <div className="title-book-block">
                            {cutText(props.title)}
                        </div>
                        <div className="author-book">
                            {/* eslint-disable-next-line react/no-array-index-key */}
                            {props.authors.map((author,index) => <div key={index}>{author}</div>)}
                        </div>
                    </div>
                    {!props.booking
                        ? <button type="button"
                                  className="button-reserve-common button-reserve-block button-block">ЗАБРОНИРОВАТЬ</button>
                        : props.booking ?
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
