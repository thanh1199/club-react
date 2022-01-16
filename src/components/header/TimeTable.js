import holidays from '../text_data/School_holiday.json'

function TimeTable () {
    // new Date (`1/1/2000 ${hour}:${minute}:00`) > new Date (`1/1/2000 8:50:00`)
    const now = new Date()
    // const now = new Date(2021, 11, 20, 10, 30)
    // console.log(now)
    // console.log(now.getFullYear())
    // console.log(now.getMonth())
    // console.log(now.getDate())
    const today = `${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()}`
    const zero_start = new Date(`${today} 7:00:00`)
    const one_start = new Date(`${today} 8:40:00`)
    const two_start = new Date(`${today} 10:20:00`)
    const break_start = new Date(`${today} 12:00:00`)
    const three_start = new Date(`${today} 12:40:00`)
    const four_start = new Date(`${today} 14:20:00`)
    const five_start = new Date(`${today} 16:00:00`)
    const five_finish = new Date(`${today} 17:40:00`)
    let isHoliday = false
    holidays.forEach(holiday => {
        if (holiday === today) isHoliday = true
    })
    if (now > zero_start && now < five_finish && now.getDay() !== 0 && now.getDay() !== 6 && isHoliday===false) {
        if (now < one_start) return "準備中"
        if (now < two_start) return "1限目"
        if (now < break_start) return "2限目"
        if (now < three_start) return "休憩"
        if (now < four_start) return "3限目"
        if (now < five_start) return "4限目"
        if (now < five_finish) return "5限目"
    } else return "閉門"
}

export default TimeTable