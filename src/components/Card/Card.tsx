import React, {FC, useCallback} from 'react'
import './Card.css'
import {Card as CardType} from '../../types'
import classNames from "classnames";

type CardProps = CardType & {
    isOpened: boolean
    isHidden: boolean
    onClick: (card: CardType) => void
}

export const Card: FC<CardProps> = ({ id, src, isOpened, isHidden,  onClick }) => {
    const handleCardClick = useCallback(() => {
        onClick({ id, src })
    }, [id, src])

    const cardClasses = classNames("card", {
        "card_opened": isOpened,
        "card_hidden": isHidden,
    })

    return (
        <article
            id={id}
            className={cardClasses}
            onClick={handleCardClick}
        >
            <img src={src} alt="изображение на карточке" className="card__image"/>
        </article>
    )
}

