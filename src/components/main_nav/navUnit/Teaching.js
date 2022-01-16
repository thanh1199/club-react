
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import clsx from 'clsx'
import mainUnit from '../../../css/mainUnit.module.scss'
import teaching from '../../../css/mainUnit/Teaching.module.scss'

import Search from './Teaching/Search'
import Result from './Teaching/Result'

function Teaching (props, ref) {
    const mode = props.mode
    console.log(mode)
    const [RESULT, SetRESULT] = useState("")

    const TEACHING = useRef()
    useImperativeHandle(ref, () => ({
        appearance () {
            TEACHING.current.className = clsx(mainUnit.mainUnitAppearance)
        },
        close () {
            document.getElementById("Calendar").scrollIntoView();
            TEACHING.current.className = clsx(mainUnit.mainUnitClose)
        }
    }))

    document.documentElement.scrollTop = 0

    const MODE = ["", false, true]
    function SetMODE (e) {
        let n = e.target.id
        SetRESULT(() => MODE[n])
    }


    return (<div ref={TEACHING} className={clsx(mainUnit.mainUnitAppearance, mainUnit[`background_${mode}`])}>
        <div id={clsx(teaching.title)} className={clsx(teaching[`title_${mode}`])}>
            <i className="fab fa-discourse"></i>
            <span style={{padding: "10px"}}>授業レビュー</span>
        </div>
        <Search mode={mode}/>
        <div onClick = {(e) => SetMODE(e)}>
            {["初回","失敗","成功"].map((e, index) => {return (
                <span id = {index} key={index} style={{padding: "10px", color: "white", backgroundColor: RESULT===MODE[index]?"#aaa":"black", cursor: "pointer"}}>{e}</span>
            )})}
        </div>

        {RESULT === false 
            ? 
            <p style={{
                textAlign: "center", 
                color: "rgb(255, 90, 90)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "15vh 0"
            }}>...</p> 
            : 
            (RESULT === "" 
                ? 
                <p style={{
                    textAlign: "center", 
                    color: "rgb(134, 255, 245)",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "15vh 0"
                }}>この科目って何にを勉強するの？と思うあなたへ</p> 
                : 
                <Result mode={mode}/>
            )
        }
        <div className={clsx(teaching.none)}></div>
    </div>)
}

export default forwardRef(Teaching)
