
import { useState } from 'react'
import { useGetOptions } from '../../../CustomHooks'

import clsx from 'clsx'
import mainUnit from '../../../css/mainUnit.module.scss'
import teaching from '../../../css/mainUnit/Teaching.module.scss'

import Search from './Teaching/Search'
import ShowWords from './Teaching/ShowWords'
import Result from './Teaching/Result'
import BackToMain from './BackToMain'

function Teaching ({ mode }) {
    const [body, setBody] = useState("welcome")
    const [options, words] = useGetOptions()
    const [choices, setChoices] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleChoices = (word) => {
        setBody(() => "searching")
        setInputValue(() => word)
        setChoices(() => options.filter((option) => option.includes(word)))
    }

    const showResult = (result) => {
        if (result === "searching") {
        }
        if (Array.isArray(result)) {
            if (result.length === 1) {
                setBody(() => result[0])
            } else {
                setBody(() => "searching")
                setChoices(() => result)
            }
        } else {
            setBody(() => "noneData")
        }
    }

    const resultStyle = {
        textAlign: "center", 
        color: "rgb(134, 255, 245)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "15vh 0",
    }

    return (<div className={clsx(mainUnit.mainUnitAppearance, mainUnit[`background_${mode}`])}>
        <BackToMain />
        <div id={clsx(teaching.title)} className={clsx(teaching[`title_${mode}`])}>
            <i className="fab fa-discourse"></i>
            <span style={{padding: "10px"}}>授業レビュー</span>
        </div>
        <Search mode={mode} options={options} inputValue={inputValue} showResult={showResult} />
        {
            (body === "welcome") ? 
            <div style={resultStyle}>この科目って何にを勉強するの？と思うあなたへ<br/>
                <br/><br/>検索可能な言葉:<br/><br/>
                <ShowWords words={words} onClick={handleChoices} />
            </div> : (
                (body === "searching") ?
                <div style={resultStyle}>検索可能な言葉:<br/><br/>
                    <ShowWords words={choices} onClick={handleChoices} isArray={true} />
                </div> : (
                    (body === "noneData") ?
                    <div style={{...resultStyle, color: "rgb(200, 255, 0)"}}>No Data</div>
                    :
                    <Result mode={mode} data={body}/>
                )
            )
        }
        <div className={clsx(teaching.none)}></div>
    </div>)
}

export default Teaching
