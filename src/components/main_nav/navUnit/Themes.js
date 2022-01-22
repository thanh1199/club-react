

import clsx from "clsx"

import "../../../css/reset.css"
import header from "../../../css/header.module.scss"
import themes from "../../../css/component/Themes.module.scss"
import unit from "../../../css/component/unit.module.scss"

import Refresh from "./other/Refresh"
import Footer from "../../Footer"
import UnitTheme from "./Themes/UnitTheme"
import themesArray from "../../text_data/themes.json"

function Themes ({ theme }) {
    window.scrollTo({top: 0, behavior: "smooth"})

    return (
        <div className={clsx(unit.unitAppearance) + ` body_${theme}`} >
            <Refresh />
            <div className={clsx(header[`header_${theme}`], themes.header)} >
                <div>あなたが好きなスタイルを<br/><br/>Preview</div>
                <iframe src={`/?theme${theme}`} title="preview" className={clsx(themes.preview)}/>
            </div>
            <div className={clsx(themes.themesMenu)} >
                {
                    themesArray.map((theme, i) => (<UnitTheme key={i} name={theme} />))
                }
            </div>
            <Footer theme={theme} />
        </div>
    )
}

export default Themes