
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import mainStyle from '../../css/main.module.scss'

function NavUnit ({ id, icon, content }) {
    return (<Link to={`/${id}`} id = {id} className={clsx(mainStyle.navIcons)}>
        <i className={icon}></i>
        <span>{content}</span>
    </Link>)
}

export default NavUnit