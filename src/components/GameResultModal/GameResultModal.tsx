import React, {FC} from 'react'
import './GameResultModal.css'
import {REPLAY_BUTTON_LABEL} from '../../constants'

type GameResultModalProps = {
    title: string
    subtitle: string
    onReplay: () => void
}

export const GameResultModal: FC<GameResultModalProps> = ({ title = "", subtitle = "", onReplay }) => (
    <div className="game-result-modal">
        <div className="game-result-modal__overlay" onClick={onReplay}>
            <div className="game-result-modal__body">
                <h2 className="game-result-modal__title">
                    {title}
                </h2>
                <p className="game-result-modal__subtitle">
                    {subtitle}
                </p>
                <button type="button" className="game-result-modal__button" onClick={onReplay}>
                    {REPLAY_BUTTON_LABEL}
                </button>
            </div>
        </div>
    </div>
)
