import React, {FC, memo} from 'react'
import './Header.css'
import {HEADER_SUBTITLE, HEADER_TITLE} from "../../constants";

const HeaderComponent: FC = () => (
    <header className="header">
        <div className="header__container">
            <h1 className="header__title">{HEADER_TITLE}</h1>
            <p className="header__subtitle">{HEADER_SUBTITLE}</p>
        </div>
    </header>
)

export const Header = memo(HeaderComponent)

Header.displayName = 'memo(Header)'
