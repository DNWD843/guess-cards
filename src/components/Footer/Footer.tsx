import React, {FC, memo} from 'react'
import './Footer.css'
import {FOOTER_COPYRIGHT_LINK_TEXT, FOOTER_COPYRIGHT_LINK_URL, FOOTER_COPYRIGHT_TEXT} from "../../constants";

const FooterComponent: FC = () => (
    <footer className="footer">
        <div className="footer__container">
            <p className="footer__copyright">
                &#169;
                {' '}
                {FOOTER_COPYRIGHT_TEXT}
                {' '}
                <a href={FOOTER_COPYRIGHT_LINK_URL} target="_blank" rel="noopener noreferrer" className="footer_copyright-link">
                    {FOOTER_COPYRIGHT_LINK_TEXT}
                </a>
            </p>
            <p className="footer__date">2023г.</p>
        </div>
    </footer>
)

export const Footer = memo(FooterComponent)

Footer.displayName = 'memo(Footer)'
