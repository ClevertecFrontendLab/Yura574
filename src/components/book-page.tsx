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
import {useAppDispatch, useAppSelector} from "../store/store";
import {Data} from "./common-components/data";
import {getBook} from "../store/reducers/book-reducer";

export type SlideType = {
    id: number
    title: string
}
export const BookPage = React.memo(() => {


        const size = useWindowSize();
        const dispatch = useAppDispatch()

        const allBooks = useAppSelector(state => state.books.allBooks)
        const book = useAppSelector(state => state.books.book)
        const error = useAppSelector(state => state.app.error)
        const {category, id} = useParams()
        const [toggleReviews, setToggleReviews] = useState<boolean>(false)
        const clickToggleReviews = () => {
            setToggleReviews(!toggleReviews)
        }
    console.log(category, id)
        useEffect(() => {
            id && dispatch(getBook(id))
        }, [id])

        const bookNotFound = (id: string) => {

            const book = allBooks.filter(el => el.id === +id)
            console.log(book && book[0] && {category: book[0].categories[0], title: book[0].title})
            console.log(allBooks)
            return allBooks.length === 0 ? {
                category: 'Все книги',
                title: ''
            } : {category: book[0].categories[0], title: book[0].title}


        }
        console.log(book)
        return (
            <div className="book-page-layout">

                {book.id !== 0 ? <div className="book-page-path-wrapper">
                    <div className="path">
                        {book.categories && book.categories.length > 0 ? <span>{book.categories[0]} / {book.title} </span>:
                            <span>{id && bookNotFound(id).category}  / {id && bookNotFound(id).title}</span>}
                    </div>
                </div> : false}

                {!error && <div className="book-page-wrapper">
                    <div className="main-inform-1100px">
                        {size.width > 768
                            ? <Slider images={book.images}/>
                            : <Slider2 images={book.images}/>
                        }
                        <div className="describe-wrapper">
                            <div>
                                <h3>
                                    {book.title}
                                </h3>
                                <div className="book-page-author ">
                                    {book.authors.map((el, index) => <div
                                        key={index}>{el}</div>)}
                                </div>
                                {!book.booking
                                    ?
                                    <button type="button"
                                            className="button-reserve-common button-reserve-book-page">ЗАБРОНИРОВАТЬ</button>
                                    : book.booking.order ?
                                        <button type="button"
                                                className="button-reserve-common button-reserve-book-page
                                                     reserve ">ЗАБРОНИРОВАНО</button>
                                        : <button type="button"
                                                  className="button-reserve-common button-reserve-book-page
                                                     reserve reverse-date">{book && book.booking.dateOrder}</button>
                                }
                            </div>
                            <div className="describe-book-main-container">
                                <div className="h5">О книге</div>
                                <div className="describe-book">{book.description}</div>
                            </div>
                        </div>

                    </div>
                    <div className="describe-book-bottom-container">
                        <div className="h5">О книге</div>
                        <div
                            className="describe-book">{book.description}                </div>
                    </div>

                    <div className="book-inform">
                        <div className="h5">Рейтинг</div>
                        <div className="dividing-line">
                            <div style={{display: "none"}}>a</div>
                        </div>
                        <div className="book-page-rating-wrapper">
                            {<Rating rating={+book.rating} classname="describe-rating"/>}
                            <div className="h5 rating-number">{book.rating}</div>
                        </div>
                        <div className="h5 detailed-information">Подробная информация</div>
                        <div className="dividing-line">
                            <div style={{display: "none"}}>a</div>
                        </div>
                        <table className="information-table">
                            <tbody className="information-table-body">
                            <tr>
                                <th>Издательство</th>
                                <td>{book.publish}</td>
                            </tr>
                            <tr>
                                <th>Год издания</th>
                                <td>{book.issueYear}</td>
                            </tr>
                            <tr>
                                <th>Страниц</th>
                                <td>{book.pages}</td>
                            </tr>
                            <tr>
                                <th>Переплёт</th>
                                <td>{book.cover}</td>
                            </tr>
                            <tr>
                                <th>Формат</th>
                                <td>{book.format}</td>
                            </tr>
                            <tr>
                                <th>Жанр</th>
                                <td>{book.categories}</td>
                            </tr>
                            <tr>
                                <th>Вес</th>
                                <td>{book.weight}</td>
                            </tr>
                            <tr>
                                <th>ISBN</th>
                                <td>{book.ISBN}</td>
                            </tr>
                            <tr>
                                <th>Изготовитель</th>
                                <td>{book.producer}      </td>
                            </tr>
                            </tbody>
                        </table>


                        <div>
                            <div
                                className='detailed-information'>
                                Отзывы <span className="number-of-reviews">
                                {book.comments ? book.comments.length : 0}
                            </span>
                                <button data-test-id='button-hide-reviews' type='button'
                                        onClick={clickToggleReviews}>
                                    <img src={toggleReviews ? arrowBtnBottom : arrowBtnTop}
                                         alt="arrow"/>
                                </button>
                            </div>
                            {!toggleReviews && book.comments &&
                                <div className="dividing-line">
                                    <div style={{display: "none"}}>a</div>
                                </div>}
                        </div>


                        {!toggleReviews && book.comments !== null
                            ? book.comments.map(comment =>
                                <div key={comment.id} className="review-container">
                                    <div className="review-header-1100">
                                        <div><img
                                            src={comment.user.avatarUrl ? 'https://strapi.cleverland.by/' + comment.user.avatarUrl : avatar}
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
                            className={book.comments ? "book-page-button-review-no-reviews" : "book-page-button-review-no-reviews"}
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

    }
)
