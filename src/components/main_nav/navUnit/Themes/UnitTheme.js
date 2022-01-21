
import { Link } from "react-router-dom"
import clsx from "clsx"

import theme from "../../../../css/component/Themes.module.scss"


function UnitTheme ({ name }) {
    const handleSetTheme = () => localStorage.setItem("theme", name)
    return (
    <Link 
        to="/Themes" 
        onClick={() => handleSetTheme()}
        className={clsx(theme.themeUnit, theme[`theme_${name}`])}
    >
        <p>{name}</p>
    </Link>)
}

export default UnitTheme