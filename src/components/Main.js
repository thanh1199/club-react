
import { useState, useRef } from 'react'

import clsx from 'clsx'
import mainStyle from '../css/main.module.scss'
import backToMain from '../css/mainUnit/BackToMain.module.scss'

import data from './text_data/homepage_text.json'
import NavUnit, { 
    Teaching, 
    AboutUs, 
    Bus, 
    Calendar,
    Examinee,
    FreeRoom, 
    InsideNews,
    Links,
    Member,
    OutsideNews
} from './main_nav/NavUnit'


let UnitRender = 'div'

console.log("0")
function Main( props ) {
    const mode = props.mode

    console.log("1")
    const main = data[1].apps
    const defaultNone = main.map(() => {return "none"})
    const unitName = [Examinee, Links, FreeRoom, Bus, InsideNews, Calendar, Teaching, OutsideNews, AboutUs, Member]

    console.log("1.1")
    const [display, setDisplay] = useState(defaultNone)
    console.log("1.2")
    const [backMain, setBackMain] = useState('none')
    console.log("1.3")
    const UNITRENDER = useRef()

    console.log("2.0")
    console.log("2")
    function handleAppearance (index) {
        console.log("a1")
        setDisplay(() => {
            let subDisplay = defaultNone
            subDisplay[index] = "block"
            console.log("a2")
            return subDisplay
        })
        console.log("a3")
        setBackMain(() => {console.log("a4"); return 'block'})
        console.log("a5")
    }
    console.log("3")

    function handleClose () {
        setDisplay(() => defaultNone)
        UNITRENDER.current.close()
        setBackMain(() => 'none')
    }
    console.log("4")

    if (display.every((dp) => dp==="none")) {
        UnitRender = "div"
    } else {
        display.forEach((dp, index) => {
            if (dp==="block") {UnitRender = unitName[index]}
        })
    }

    console.log("5")

    return (<>
        {console.log("6")}
        <div className={clsx(mainStyle.main, mainStyle[`main_${mode}`])}>
            {main.map((app, index) => {
                return (
                    <NavUnit 
                        onClick={() => handleAppearance(index)} 
                        key={app.id}
                        id={app.id}
                        icon={app.icon} 
                        content={app.content} 
                    />
                )
            })}
        </div>
        {console.log("7")}
        <UnitRender 
            mode = {mode}
            ref={UNITRENDER}
        />
        {console.log("8")}
        <div 
            id={clsx(backToMain.backToMain)} 
            style={{display: backMain}}
            onClick={() => {
                handleClose()
            }} 
        >
            <i className="fas fa-undo-alt"></i>
        </div>
        {console.log("9")}
    </>)
}

export default Main;