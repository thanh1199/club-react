
import clsx from 'clsx'

import footerStyle from '../css/footer.module.scss'
import data from './text_data/homepage_text.json'
const footer = data[2]
function Footer({ theme }) {
    return (
        <footer id={clsx(footerStyle.footer)} className={clsx(footerStyle[theme])}>
            <p>{footer.text1}<br></br> {footer.text2}</p>
            <br></br>
            <p>{footer.text3}</p>
            <br></br>
            <p>{footer.text4}</p>
            <a href={footer.qrcode} target="blank"><img src={footer.qrcode} alt="QRcode"></img></a>
        </footer>
    )
}

export default Footer;