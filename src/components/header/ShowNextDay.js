

import holidays from '../text_data/School_holiday.json'
import lessons from '../text_data/Schedule.json'

function ShowNextDay (prop) {
    let nextday = new Date()
    if (prop.milestone) {nextday.setDate(nextday.getDate() + 1)}

    let nextdayLessons = {}
    let isHoliday = false
    do {
        while (nextday.getDay() === 6 || nextday.getDay() === 0) {
            nextday.setDate(nextday.getDate() + 1)
        }
        isHoliday = holidays.find(
            holiday => holiday === `${nextday.getFullYear()}/${nextday.getMonth()+1}/${nextday.getDate()}`
        )
    } while (isHoliday)
    nextdayLessons = lessons[(nextday.getDay()-1)%5]
    return (<>
    {
        Object.keys(nextdayLessons).map((p, i1) => {
            return (<div key={i1}>
                <>{i1 < 1 ? `次のスケジューは ${nextday.getMonth()+1}月${nextday.getDate()}日` : ""}</>
                <p style={{textAlign: "left"}}>{i1 > 1 ? `${i1-1}限目` : ""}</p>
                {nextdayLessons[p].map((l, i2) => {
                    return (<p key={`${i1}${i2}`}>{l.name} {l.room!==undefined? `(${l.room})` : ""}</p>)
                })}
            </div>)
        })
    }
    </>)
} 

export default ShowNextDay