import React, {FC} from 'react'
import './CardList.css'
import {Card as CardComponent} from "../Card";
import {Card} from "../../types";

type CardListProps = {
    cards: Card[]
    openedCards: Card[]
    hiddenCards: Card[]
    onCardClick: (card: Card) => void
}

export const CardList: FC<CardListProps> = ({ cards, openedCards, hiddenCards, onCardClick }) => (
    <ul className="card-list">
        {cards?.map((card) => {
            const {id: cardId} = card
            const isCardOpened = openedCards?.some((openedCard => openedCard.id === cardId))
            const isCardHidden = hiddenCards?.some((hiddenCard => hiddenCard.id === cardId))

            return (
                <li key={cardId} className="card-list__item">
                    <CardComponent
                        {...card}
                        isOpened={isCardOpened}
                        isHidden={isCardHidden}
                        onClick={onCardClick}
                    />
                </li>
            )
        })}
    </ul>
)
