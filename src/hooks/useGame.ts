import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {shuffle} from "../utils";
import {Card} from "../types";
import {
    CLOSING_DELAY,
    INITIAL_REMAINING_MOVES_NUMBER,
    OPENED_CARDS_MAX_NUMBER,
    icons,
} from "../constants";

const initialCards: Card[] = [...icons, ...icons].map(iconSrc => ({
        id: self.crypto.randomUUID(),
        src: iconSrc,
    })
)

export const useGame = () => {
    const [cards, setCards] = useState(shuffle<Card>(initialCards))
    const [openedCards, setOpenedCards] = useState<Card[]>([])
    const [hiddenCards, setHiddenCards] = useState<Card[]>([])
    const [movesNumber, setMovesNumber] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false)

    const closingTimeoutRef = useRef<number | null>(null)

    const onCardClick = useCallback((card: Card) => {
        if (closingTimeoutRef.current) {
            clearTimeout(closingTimeoutRef.current)
        }

        setOpenedCards(prev => {
            if (prev.length === OPENED_CARDS_MAX_NUMBER) {
                return [card]
            }

            return [...prev, card]
        })
    }, [])

    const resetGame = useCallback(() => {
        setOpenedCards([])
        setHiddenCards([])
        setMovesNumber(0)
        setCards(shuffle<Card>(initialCards))
        setModalVisible(false)
    }, [])

    const areAllCardsOpened = useMemo(() => hiddenCards.length === cards.length, [hiddenCards.length, cards.length])

    useEffect(() => {
        if (openedCards.length < OPENED_CARDS_MAX_NUMBER) {
            return
        }

        setMovesNumber(prev => prev + 1)
        // setRemainingMovesNumber(prev => prev - 1)

        const [firstCard, ...restCards] = openedCards

        if (restCards.every(({ src }) => src === firstCard.src)) {
            setHiddenCards(prev => [...prev, ...openedCards])
        } else {
            closingTimeoutRef.current = window.setTimeout(() => {
                setOpenedCards([])
            }, CLOSING_DELAY)
        }
    }, [openedCards])

    useEffect(() => {
        if (areAllCardsOpened) {
            setModalVisible(true)
        }
    }, [areAllCardsOpened])

    return {
        cards,
        openedCards,
        hiddenCards,
        movesNumber,
        remainingMovesNumber: INITIAL_REMAINING_MOVES_NUMBER - movesNumber,
        isModalVisible,
        onCardClick,
        resetGame,
        areAllCardsOpened,
    }
}
