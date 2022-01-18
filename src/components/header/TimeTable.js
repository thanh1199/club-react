
import holidays from '../text_data/School_holiday.json'

function TimeTable ( ) {
    const today = new Date()
    const todayForm = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
    const zero_start = new Date(`${todayForm} 7:00:00`)
    const one_start = new Date(`${todayForm} 8:40:00`)
    const two_start = new Date(`${todayForm} 10:20:00`)
    const break_start = new Date(`${todayForm} 12:00:00`)
    const three_start = new Date(`${todayForm} 12:40:00`)
    const four_start = new Date(`${todayForm} 14:20:00`)
    const five_start = new Date(`${todayForm} 16:00:00`)
    const five_finish = new Date(`${todayForm} 17:40:00`)
    const isHoliday = holidays.find((holiday) => holiday === todayForm)

    if (today > zero_start && today < five_finish && today.getDay() !== 0 && today.getDay() !== 6 && isHoliday===undefined) {
        if (today < one_start) return "準備中"
        if (today < two_start) return "1限目"
        if (today < break_start) return "2限目"
        if (today < three_start) return "休憩"
        if (today < four_start) return "3限目"
        if (today < five_start) return "4限目"
        if (today < five_finish) return "5限目"
    } else {
        return "閉門"
    }
}

export default TimeTable