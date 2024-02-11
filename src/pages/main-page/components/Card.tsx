import {Divider} from 'antd';
import like from '../../../assets/svg/like.svg';
import React from 'react';


type CardType = {
    title: string
    titleButton: string
    img: string
    altImg: string
}
export const Card = (props: CardType) => {
    const {img, altImg, titleButton, title} = props
    return (

        <div className={'mainContent_cardAction'}>
            <div
                className={'mainContent_card'}>
                <span>{title}</span>
            </div>
            <Divider style={{
                margin: '0'
            }}/>
            <div
                className={'body_regular_14 mainContent_cardActionButtonWrapper'}>
                <img src={img} alt={altImg}/>
                <span className={'mainContent_cardActionButton'}>{titleButton}</span>
            </div>
        </div>

    )
}
