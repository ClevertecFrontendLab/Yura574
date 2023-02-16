/* eslint-disable */
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Rating} from "./main-section/rating";
import avatar from "../assets/png/avatar-review.png";
import {Slider} from "./main-section/view-items/slider";
import {Slider2} from "./main-section/view-items/slider2";

import {useWindowSize} from "../utils/utils";
import arrowBtnBottom from '../assets/svg/arrow-bottom-black.svg'
import arrowBtnTop from '../assets/svg/arrow-top-black.svg'
import {initialState} from "./initial-state";
import {useAppDispatch, useAppSelector} from "../store/store";
import {Data} from "./common-components/data";
import {getBook} from "../store/reducers/book-reducer";

export type SlideType = {
    id: number
    title: string
}
export const BookPage = () => {
    const size = useWindowSize();
    const dispatch = useAppDispatch()

    const book = useAppSelector(state => state.books.book)
    const error = useAppSelector(state => state.app.error)
    const {id} = useParams()
    const [toggleReviews, setToggleReviews] = useState<boolean>(true)
    const clickToggleReviews = () => {
        setToggleReviews(!toggleReviews)
    }

    useEffect(() => {
        id && dispatch(getBook(id))
    }, [id])


    return (
        <div className="book-page-layout">

            <div className="book-page-path-wrapper">
                <div className="path">
                    {book && book.categories && book.categories[0]} / {book && book.title}
                </div>
            </div>

            {!error && <div className="book-page-wrapper">
                    <div className="main-inform-1100px">
                        {size.width > 768
                            ? <Slider images={book && book.images}/>
                            : <Slider2 images={book && book.images}/>
                        }
                        <div className="describe-wrapper">
                            <div>
                                <h3>
                                    {book && book.title}
                                </h3>
                                <div className="book-page-author ">
                                    {book && book.authors.map((el, index) => <div key={index}>{el}</div>)}
                                </div>
                                {!initialState.reservation
                                    ?
                                    <button type="button"
                                            className="button-reserve-common button-reserve-book-page">ЗАБРОНИРОВАТЬ</button>
                                    : initialState.reservation === true ?
                                        <button type="button"
                                                className="button-reserve-common button-reserve-book-page
                                                     reserve ">ЗАБРОНИРОВАНО</button>
                                        : <button type="button"
                                                  className="button-reserve-common button-reserve-book-page
                                                     reserve reverse-date">{initialState.reservation}</button>
                                }
                            </div>
                            <div className="describe-book-main-container">
                                <div className="h5">О книге</div>
                                <div className="describe-book">{book && book.description}</div>
                            </div>
                        </div>

                    </div>
                    <div className="describe-book-bottom-container">
                        <div className="h5">О книге</div>
                        <div
                            className="describe-book">{book && book.description}                </div>
                    </div>

                    <div className="book-inform">
                        <div className="h5">Рейтинг</div>
                        <div className="dividing-line">
                            <div style={{display: "none"}}>a</div>
                        </div>
                        <div className="book-page-rating-wrapper">
                            {book && <Rating rating={+book.rating} classname="describe-rating"/>}
                            <div className="h5 rating-number">{book && book.rating}</div>
                        </div>
                        <div className="h5 detailed-information">Подробная информация</div>
                        <div className="dividing-line">
                            <div style={{display: "none"}}>a</div>
                        </div>
                        <table className="information-table">
                            <div className="table-first-div">
                                <div className="table-row-container">
                                    <tr>
                                        <th>Издательство</th>
                                        <td>{book && book.publish} <br/></td>
                                    </tr>
                                </div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>Год издания</th>
                                        <td>{book && book.issueYear}</td>
                                    </tr>
                                </div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>Страниц</th>
                                        <td>{book && book.pages}</td>
                                    </tr>
                                </div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>Переплёт</th>
                                        <td>{book && book.cover}</td>
                                    </tr>
                                </div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>Формат</th>
                                        <td>{book && book.format}</td>
                                    </tr>
                                </div>
                            </div>
                            <div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>Жанр</th>
                                        <td>{book && book.categories}</td>
                                    </tr>
                                </div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>Вес</th>
                                        <td>{book && book.weight}</td>
                                    </tr>
                                </div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>ISBN</th>
                                        <td>{book && book.ISBN}</td>
                                    </tr>
                                </div>
                                <div className="table-row-container">
                                    <tr>
                                        <th>Изготовитель</th>
                                        <td>{book && book.producer}
                                        </td>
                                    </tr>
                                </div>
                            </div>
                        </table>


                        <div>
                            <div
                                className={toggleReviews ? "h5 detailed-information" : 'h5 detailed-information'}>
                                Отзывы <span className="number-of-reviews">
                                {book && book.comments? book.comments.length : 0}
                            </span>
                                <button data-test-id='button-hide-reviews' type='button'
                                        onClick={clickToggleReviews}>
                                    <img src={toggleReviews ? arrowBtnBottom : arrowBtnTop}
                                         alt="arrow"/>
                                </button>
                            </div>
                            {!toggleReviews && book && book.comments.length > 0 &&
                                <div className="dividing-line">
                                    <div style={{display: "none"}}>a</div>
                                </div>}
                        </div>


                        {!toggleReviews && book && book.comments
                            ? book.comments.map(comment =>
                                <div key={comment.id} className="review-container">
                                    <div className="review-header-1100">
                                        <div><img
                                            src={comment.user.avatarUrl ? 'https://strapi.cleverland.by/' +comment.user.avatarUrl : avatar}
                                            alt="ava"/></div>
                                        <div>{comment.user.firstName} {comment.user.lastName}</div>
                                        <div><Data data={comment.createdAt}/></div>
                                    </div>
                                    <div className="review-header-320">
                                        <div><img src={avatar} alt="ava"/></div>
                                        <div className="review-header-container">
                                            <div>{comment.user.firstName} {comment.user.lastName}</div>
                                            <div><Data data={comment.createdAt}/></div>
                                        </div>
                                    </div>
                                    <Rating rating={comment.rating} classname="describe-rating"/>
                                    <div className="review">{comment.text}</div>
                                </div>)
                            : ""}

                        <div
                            className={book && book.comments  ? "book-page-button-review-no-reviews" : "book-page-button-review-no-reviews"}
                        >
                            <button
                                data-test-id='button-rating'
                                type="button"
                                className="button-reserve-common  button-reserve-book-page ">оценить
                                книгу
                            </button>
                        </div>
                    </div>
                </div>}
        </div>
    );

};
