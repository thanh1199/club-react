
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import refresh from '../../../../css/mainUnit/Refresh.module.scss'


function Refresh ({ page = "default", handleRefresh = f => f }) {
    if (page !== "default") {
        return (
            <div id={clsx(refresh.refresh)} onClick={() => handleRefresh()} >
                <i className="fas fa-undo-alt"></i>
                <div className={clsx(refresh.refreshBefore)} >Undo step</div>
            </div>
        )
    }
    return (
        <Link to="/" id={clsx(refresh.refresh)}>
            <i className="fas fa-undo-alt"></i>
            <div className={clsx(refresh.refreshBefore)} >Main menu</div>
        </Link>
    )
}
export default Refresh