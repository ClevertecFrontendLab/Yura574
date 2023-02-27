/* eslint-disable */
import React from "react";

type HighlightsType = {
    search: string;
    title: string
}

export const Highlights = (props: HighlightsType) => {
    const {search, title} = props;

    const index = title.toLowerCase().indexOf(search.toLowerCase());
    const start = index !== 0 ? title.slice(0, index) : '';
    const highlightText = title.substring(index, index + search.length)
    const finish = index + search.length === title.length
        ? ''
        : title.slice(index + search.length);


    return (
        <span>
            {start}
            <span className='highlights'
                  data-test-id='highlight-matches'>
                {highlightText}
            </span>
            {finish}
        </span>
    )
}
