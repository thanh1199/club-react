

import clsx from 'clsx'
import { useState, useEffect } from 'react'
import teaching from '../../../../css/mainUnit/Teaching.module.scss'


function Search ( props ) {
    const mode = props.mode
    var [options, setOptions] = useState([])
    useEffect(() => {
        fetch('https://programmer-club.herokuapp.com/api/v1/Teacher/simple')
        .then((response) => response.json())
        .then((obj) => obj.data)
        .then((result) => { console.log(result); return result})
        .then((result) => {
            setOptions((prev) => {
                result.forEach((teacher) => 
                    teacher.subjects.forEach((sub) => {
                        prev = [...prev, `${teacher.name} ${sub.name} ${sub.season}`]
                    })
                )
                return prev
            }
            )
        })
        .catch(error => console.log(error))
    }, [])

    return (<>
        <div id={clsx(teaching.search)}>
            <input className={clsx(teaching[`input_${mode}`])} type="text" required placeholder="平川先生、線形代数、２年生後期 ..." />
            <button>検索</button>
        </div>
        {options.map((ops, i) => <p key={i}>{ops}</p>)}
    </>
    )
}

export default Search