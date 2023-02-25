/* eslint-disable */
import React, {useState} from 'react';

import lineGray from '../../assets/svg/icon_line-gray.svg';
import lineWhite from '../../assets/svg/icon_line-white.svg';
import squareGray from '../../assets/svg/icon_square-four-gray.svg';
import squareWhite from '../../assets/svg/icon_square-four-white.svg';
import inputClose from '../../assets/svg/inputClose.svg';
import iconSearch from '../../assets/svg/search.svg'
import {useWindowSize} from '../../utils/utils';
import {AllBooksType} from "../../store/reducers/book-reducer";
import { useAppSelector} from "../../store/store";


type SortingItemsType = {
    changeView: (view: string) => void
    view: string
    setBooksHandler: (sort: boolean) => void
    ratingBooks: AllBooksType[]
    sortByRating: boolean
    handleInputSort: (value: string)=> void
}

export const SortingItems = React.memo((props: SortingItemsType) => {
    const {sortByRating, setBooksHandler, view, changeView, handleInputSort} = props

    const size = useWindowSize();

    const inputSortValue = useAppSelector(state => state.app.inputSortValue)

    const [activeInput, setActiveInput] = useState<string>('');
    const inputClick = () => {
        setActiveInput('active-input');
    };

    return (


        <div className="sorting-container">
            {activeInput === 'active-input' && size.width <= 320 ?
                <div className="active-input-container">
                    <input data-test-id='input-search'
                           className="active-input"
                           placeholder="Поиск книги или автора…"
                           value={inputSortValue}
                           autoFocus
                           onChange={e => handleInputSort(e.currentTarget.value)}
                    />
                    <button
                        data-test-id="button-search-close"
                        className="active-input-button"
                        type="button"
                        onClick={() => setActiveInput('')}>
                        <img src={inputClose} alt="close"/>
                    </button>
                </div>
                :
                <React.Fragment>
                    <div className="sort-by-rating-container">

                        <button data-test-id="button-search-open" type="button"
                                className="button button-search"
                                onClick={inputClick}><img src={iconSearch} alt='search'/></button>

                        <input data-test-id="input-search"
                               placeholder="Поиск книги или автора…"
                               className="input-search"
                               value={inputSortValue}
                               onChange={e => handleInputSort(e.currentTarget.value)}
                        />
                        <button type="button" className='sort-by-rating'
                                onClick={() => setBooksHandler(sortByRating)}
                                data-test-id='sort-rating-button'>
                            <div className='image-container'>
                                <span
                                    className={sortByRating ? 'image-sort' : 'image-sort rotate'}> </span>
                                <span>По рейтингу</span>
                            </div>
                        </button>

                    </div>
                    <div className="sort-button-container">
                        <button
                            data-test-id="button-menu-view-window"
                            type="button"
                            className={props.view === 'block' ? 'square-icons active-icons' : 'square-icons'}
                            onClick={() => changeView('block')}>
                            <img src={props.view === 'block' ? squareWhite : squareGray}
                                 alt="square"/>
                        </button>
                        <button
                            data-test-id="button-menu-view-list"
                            type="button"
                            className={view === 'line' ? 'line-icons active-icons' : 'line-icons'}
                            onClick={() => changeView('line')}>
                            <img src={view === 'line' ? lineWhite : lineGray} alt="lolo"/>
                        </button>
                    </div>
                </React.Fragment>
            }

        </div>
    );

});
