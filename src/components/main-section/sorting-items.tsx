/* eslint-disable */
import React, { useState } from 'react';

import lineGray from '../../assets/svg/icon_line-gray.svg';
import lineWhite from '../../assets/svg/icon_line-white.svg';
import squareGray from '../../assets/svg/icon_square-four-gray.svg';
import squareWhite from '../../assets/svg/icon_square-four-white.svg';
import inputClose from '../../assets/svg/inputClose.svg';
import iconSearch from '../../assets/svg/search.svg'
import { useWindowSize } from '../../utils/utils';
import {AllBooksType} from "../../store/reducers/book-reducer";


type SortingItemsType = {
    changeView: (view: string) => void
    view: string
    setBooksHandler: (sort: boolean)=>void
    ratingBooks: AllBooksType[]
    sortByRating: boolean
}

export const SortingItems = React.memo((props: SortingItemsType) => {
    const size = useWindowSize();
    const [activeInput, setActiveInput] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('')
    const inputClick = () => {
        setActiveInput('active-input');
    };

    return (


        <div className="sorting-container">
            {activeInput === 'active-input' && size.width <= 320 ?
                <div className="active-input-container">
                    <input  data-test-id='input-search'
                            className="active-input"
                            placeholder="Поиск книги или автора…"
                            value={searchValue}
                            onChange={e=>setSearchValue(e.currentTarget.value)}
                    />
                    <button
                        data-test-id="button-search-close"
                        className="active-input-button"
                        type="button"
                        onClick={() => setActiveInput('')}>
                        <img src={inputClose} alt="close" />
                    </button>
                </div>
                :
                <React.Fragment>
                    <div className="sort-by-rating-container">

                             <button data-test-id="button-search-open" type="button"
                                      className="button button-search"
                                      onClick={inputClick}><img src={iconSearch} alt='search'/> </button>

                            <input data-test-id="input-search"
                                   placeholder="Поиск книги или автора…"
                                   className="input-search"
                                   value={searchValue}
                                   onChange={e=>setSearchValue(e.currentTarget.value)}
                                   />
                        <button type="button" className="sort-by-rating" onClick={()=>props.setBooksHandler(props.sortByRating)}>
                            <span>По рейтенгу</span>
                        </button>

                    </div>
                    <div className="sort-button-container">
                        <button
                            data-test-id="button-menu-view-window"
                            type="button"
                            className={props.view === 'block' ? 'square-icons active-icons' : 'square-icons'}
                            onClick={() => props.changeView('block')}>
                            <img src={props.view === 'block' ? squareWhite : squareGray}
                                 alt="square" />
                        </button>
                        <button
                            data-test-id="button-menu-view-list"
                            type="button"
                            className={props.view === 'line' ? 'line-icons active-icons' : 'line-icons'}
                            onClick={() => props.changeView('line')}>
                            <img src={props.view === 'line' ? lineWhite : lineGray} alt="lolo" />
                        </button>
                    </div>
                </React.Fragment>
            }

        </div>
    );

});
