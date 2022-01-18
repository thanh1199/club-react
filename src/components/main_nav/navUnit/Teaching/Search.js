
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import teaching from '../../../../css/mainUnit/Teaching.module.scss'


function Search ({ mode, options, inputValue, showResult = f => f }) {
    const [input, setInput] = useState(inputValue)
    useEffect(() => {setInput(() => inputValue)}, [inputValue])

    const handleInput = (value) => {
        setInput(() => value)
    }

    const handleSearch = (input__) => {
        const input_ = input__.trim()
        const input = input_.replace(/[&¥/¥¥#,+()$~%.`|'":*?<>{}]/g, '')
        const resultArray = options.filter((option) => option.includes(input))

        if (resultArray.length === 0) showResult("noneData")
        if (resultArray.length >= 1) showResult(resultArray)
    }

    return (<>
        <div id={clsx(teaching.search)}>
            <input 
                className={clsx(teaching[`input_${mode}`])} 
                type="text" 
                required 
                placeholder="平川先生、線形代数、後期 ..." 
                list='suggestions'
                value={input}
                onChange={(e) => handleInput(e.target.value)}
            />
            <datalist id='suggestions'>
                {
                    options.map((option, i) => <option key={i}>{option}</option>)
                }
            </datalist>
            <button onClick={() => handleSearch(input)} >検索</button>
        </div>
    </>)
}

export default Search