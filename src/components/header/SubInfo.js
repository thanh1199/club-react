
import { useState } from 'react' 
import { useEffect } from 'react'

import clsx from 'clsx'
import headerStyle from '../../css/header.module.scss'

import lessons from '../text_data/Schedule.json'
import TimeTable from './TimeTable'
import ShowNextDay from './ShowNextDay'

let today = []
let now_time = ""
let todayLessons = {}
let part = ""
let nextpart = ""

function SubInfo () {
    now_time = TimeTable()
    const [TODAY, setTODAY] = useState(new Date())   
    today = TODAY
    if ((today.getDay() - 1)>-1 && (today.getDay() - 1)<5) {
        todayLessons = lessons[(today.getDay() - 1)]
    } else {
        todayLessons = lessons[5 - 1]
    }
    switch (now_time) {
        case '1限目':
            part = 'part1'
            nextpart = 'part2'
            break;
        case '2限目':
            part = 'part2'
            nextpart = 'part0'
            break;
        case '休憩':
            part = 'part0'
            nextpart = 'part3'
            break;
        case '3限目':
            part = 'part3'
            nextpart = 'part4'
            break;
        case '4限目':
            part = 'part4'
            nextpart = 'part5'
            break;
        case '5限目':
            part = 'part5'
            nextpart = 'part0'
            break;
        default:
            part = 'part0'
            nextpart = 'part0'
    }
    useEffect(() => 
        setInterval(() => 
            setTODAY(() => {
                return new Date()
            }), 60000)
    , [])
    return (
        <div className={clsx(headerStyle.info)} id={clsx(headerStyle.subInfo)}>
            <Part />
            {
                todayLessons[part].map((lesson, index) => {
                    return (<p key={index}>{lesson.name === undefined ? "" : `${lesson.name}`} {lesson.room === undefined ? "" : `(${lesson.room})`}</p>)
                })
            }
            <NextPart />
            {
                todayLessons[nextpart].map((lesson, index) => {
                    return (<p key={index}>{lesson.name === undefined ? "" : `${lesson.name}`} {lesson.room === undefined ? "" : `(${lesson.room})`}</p>)
                })
            }
        </div>
    )
}

function NowTime () {
    const [nowTime, setNowTime] = useState(TimeTable())
    useEffect(() => 
        setInterval(() => 
            setNowTime(() => {
                return TimeTable()
            }), 60000)
    , [])
    return nowTime
}
function Tomorrow () {
    
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate()+1)

    const [Tomorrow, setNowTime] = useState(tomorrow.getDate())
    useEffect(() => 
        setInterval(() => 
            setNowTime(() => {
                const tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate()+1)
                return tomorrow.getDate()
            }), 60000)
    , [])
    return Tomorrow
}

function Part () {
    if (!(part === 'part0' && nextpart ==='part0')) {
        if (part !== 'part0'){
            return (<p style={{textAlign: "left"}}> - 授業中 - ----- </p>)
        } else {
            return (<p style={{textAlign: "left"}}> --- 昼休み中です --- </p>)
        }
    } else {
        return ""
    }
}
function NextPart () {
    if (nextpart !== 'part0') {
        return (<p style={{textAlign: "left"}}> - 次は - ----- </p>)
    }
    if (part === 'part2') {
        return (<p style={{textAlign: "left"}}> - 次は 昼休みです</p>)
    }
    return (<>
        <>{part === "part5" ? <p>
            <br />
            ----- お疲れ様でした -----
            <br />
            <br />
        </p> : ""}</>
        <ShowNextDay milestone={today.getHours()>9}/>
    </>)
}

export { NowTime, Tomorrow }
export default SubInfo