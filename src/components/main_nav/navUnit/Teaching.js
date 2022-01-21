
import { useState } from 'react'
import { useGetOptions } from '../../../CustomHooks'

import clsx from 'clsx'
import unit from '../../../css/component/unit.module.scss'
import teaching from '../../../css/component/Teaching.module.scss'

import Search from './Teaching/Search'
import ShowWords from './Teaching/ShowWords'
import Result from './Teaching/Result'
import Refresh from './other/Refresh'

function Teaching ({ theme }) {
    window.scrollTo({top: 0, behavior: "smooth"})

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

    const refresher = () => {
        setBody(() => "welcome")
    }

    const resultStyle = {
        textAlign: "center", 
        color: "rgb(134, 255, 245)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "15vh 0",
    }

    return (<div className={clsx(unit.unitAppearance) + `body_${theme}`}>
        <div id={clsx(teaching.subHeader)} />
        {
            body !== "welcome" ? 
            <Refresh page='Teaching' handleRefresh={() => refresher()} />
            :
            <Refresh />
        }
        <Search theme={theme} options={options} inputValue={inputValue} showResult={showResult} />
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
                    <div style={{...resultStyle, color: "rgb(200, 255, 0)"}}>一致するデータがありません。</div>
                    :
                    <Result theme={theme} data={body}/>
                )
            )
        }
        <div className={clsx(teaching.none)}></div>
    </div>)
}

export default Teaching
