import React, {FC} from 'react'
import './App.css'
import {Header} from '../Header'
import {Footer} from '../Footer'
import {InfoPanel} from '../InfoPanel'
import {CardList} from '../CardList'
import {GameResultModal} from '../GameResultModal'
import {pluralize, PluralizeConfigKeys, PluralizedTextForms} from '../../utils'
import {useGame} from '../../hooks/useGame'
import {
    LOSER_SUBTITLE,
    LOSER_TITLE,
    WINNER_TITLE,
    MADE_MOVES_INFO_TITLE,
    REMAINING_MOVES_INFO_TITLE,
} from '../../constants'

const gameMoveTextForms: PluralizedTextForms = {
    [PluralizeConfigKeys.nominativeCaseForm]: "ход",
    [PluralizeConfigKeys.genitiveCaseForm]: "хода",
    [PluralizeConfigKeys.pluralForm]: "ходов"
}

export const App: FC = () => {
    const {
        cards,
        openedCards,
        hiddenCards,
        movesNumber,
        remainingMovesNumber,
        isModalVisible,
        onCardClick,
        resetGame,
        areAllCardsOpened,
    } = useGame()

    return (
        <>
            <Header/>
            <main className="content page__content">
                <section className="game centered-block">
                    <div className="game__board">
                        <InfoPanel
                            title={MADE_MOVES_INFO_TITLE}
                            value={movesNumber}
                            className="game__info"
                        />
                        <CardList
                            cards={cards}
                            openedCards={openedCards}
                            hiddenCards={hiddenCards}
                            onCardClick={onCardClick}
                        />
                        <InfoPanel
                            title={REMAINING_MOVES_INFO_TITLE}
                            value={remainingMovesNumber}
                            className="game__info"
                        />
                    </div>
                </section>
            </main>
            <Footer/>
            {isModalVisible
                ? (<GameResultModal
                    title={areAllCardsOpened ? WINNER_TITLE : LOSER_TITLE}
                    subtitle={areAllCardsOpened
                        ? `Это заняло ${movesNumber} ${pluralize({quantity: movesNumber, textForms: gameMoveTextForms})}`
                        : LOSER_SUBTITLE}
                    onReplay={resetGame}
                />)
                : null}
        </>
    )
}
