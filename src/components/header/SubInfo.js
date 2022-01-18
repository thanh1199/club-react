
import clsx from 'clsx'
import headerStyle from '../../css/header.module.scss'

import lessons from '../text_data/Schedule.json'
import ShowNextDay from './ShowNextDay'

let todayLessons = {}
let part = ""
let nextpart = ""

function SubInfo ({ today, now, tomorrow }) {
    if ((today.getDay() - 1)>-1 && (today.getDay() - 1)<5) {
        todayLessons = lessons[(today.getDay() - 1)]
    } else {
        todayLessons = lessons[5 - 1]
    }
    switch (now) {
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
    return (<div className={clsx(headerStyle.info)} id={clsx(headerStyle.subInfo)}>
        <Part part={part} nextpart={nextpart}/>
        {
            todayLessons[part].map((lesson, index) => (<p key={index}>
                {lesson.name === undefined ? "" : `${lesson.name}`} 
                {lesson.room === undefined ? "" : `(${lesson.room})`}
            </p>))
        }
        <NextPart part={part} nextpart={nextpart} today={today} tomorrow={tomorrow} />
        {
            todayLessons[nextpart].map((lesson, index) => (<p key={index}>
                {lesson.name === undefined ? "" : `${lesson.name}`} 
                {lesson.room === undefined ? "" : `(${lesson.room})`}
            </p>))
        }
    </div>)
}

function Part ({part, nextpart}) {
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
function NextPart ({ part, nextpart, today, tomorrow }) {
    if (nextpart !== 'part0') {
        return (<p style={{textAlign: "left"}}> - 次は - ----- </p>)
    }
    if (part === 'part2') {
        return (<p style={{textAlign: "left"}}> - 次は 昼休みです</p>)
    }
    return (<>
        {part === "part5" ? 
        <p><br />----- お疲れ様でした -----<br /><br /></p> 
        : 
        ""}
        <ShowNextDay today={today} tomorrow={tomorrow} />
    </>)
}

export default SubInfo