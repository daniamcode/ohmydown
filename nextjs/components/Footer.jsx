import React from 'react';
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p>Sleep without worries! <i className={footerStyles.footer__bedIcon} class="fas fa-bed">&#128719;</i> We check the health of your websites and notify issues only in the cases you want to.</p>
        </footer>
    )
}

export default Footer
