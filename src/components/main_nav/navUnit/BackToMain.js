
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import backToMain from '../../../css/mainUnit/BackToMain.module.scss'


function BackToMain () {
    return (
        <Link to="/" id={clsx(backToMain.backToMain)}>
            <i className="fas fa-undo-alt"></i>
        </Link>
    )
}
export default BackToMain