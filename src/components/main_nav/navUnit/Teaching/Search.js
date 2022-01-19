
import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'
import teaching from '../../../../css/mainUnit/Teaching.module.scss'
import Datalist from '../other/Datalist'


function Search ({ mode, options, inputValue, showResult = f => f }) {
    if (localStorage.getItem("selected") === null) {
        localStorage.setItem("selected", "[]")
    }
    const history = JSON.parse(localStorage.getItem("selected")).reverse()
    const showedHistory = history.length > 4 ? [history[0], history[1], history[2], history[3], history[4]] : history

    const [input, setInput] = useState(inputValue)
    const [needHistory, setNeedHistory] = useState(true)
    const [showDatalist, setShowDatalist] = useState(false)

    useEffect(() => {setInput(() => inputValue)}, [inputValue])
    const Input = useRef()

    const handleInput = (value) => {
        setInput(() => value)
        if (value === "")  {setNeedHistory(() => true)} else {setNeedHistory(() => false)}
    }

    const handleSearch = (input__) => {
        const input_ = input__.trim()
        if (input_ !== "") {
            const final_input = input_.replace(/[&¥/¥¥#,+$~%.`|'":*?<>{}]/g, '')
            const resultArray = options.filter((option) => option.includes(final_input))
    
            if (resultArray.length === 0) showResult("noneData")
            if (resultArray.length >= 1) {
                showResult(resultArray)
    
                if (history.some((his) => his === final_input)) {
                    history.splice((history.indexOf(final_input)), 1)
                }
                const reverseHistory = history.reverse()
                localStorage.setItem("selected", JSON.stringify([...reverseHistory, final_input]))
            }
        } else {
            showResult(options)
        }
    }

    const fillInput = (option) => setInput(() => option)

    return (<>
        <div id={clsx(teaching.search)} style={{position: "relative"}}>
            <input 
                id='input'
                className={clsx(teaching[`input_${mode}`])} 
                type="text" 
                required 
                placeholder="フリン、線形代数、後期 ..." 
                list="suggestions"
                value={input}
                onChange={(e) => handleInput(e.target.value)}
                onFocus={() => setShowDatalist(() => true)}
                onBlur={() => setShowDatalist(() => false)}
                autoComplete="off"
                ref={Input}
            />
            <Datalist 
                show={showDatalist} 
                mode={mode} 
                condition={needHistory} 
                lists={[showedHistory, options]} 
                intimeValue={input}
                handleSelect={fillInput}
                dependenceWidth={Input}
            />
            <button onClick={() => handleSearch(input)} >検索</button>
        </div>
    </>)
}

export default Search