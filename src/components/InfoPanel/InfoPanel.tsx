import React, {FC} from 'react'
import './InfoPanel.css'
import classNames from "classnames";

type InfoPanelProps = {
    title: string
    value: number
    className?: string
}

export const InfoPanel: FC<InfoPanelProps> = ({ title = "", value = 0, className = "" }) => (
    <div className={classNames("info-panel", className)}>
        <p className="info-panel__title">{title}</p>
        <span className="info-panel__value">{value}</span>
    </div>
)
