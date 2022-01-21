
import { useFreshDate } from '../CustomHooks'

import clsx from 'clsx'
import headerStyle from './../css/header.module.scss'
import data from './text_data/homepage_text.json'

import SubInfo from './header/SubInfo'
import WeatherIn3Hours from './header/WeatherIn3Hours'
import TimeTable from './header/TimeTable'

function Header({ theme }) {
    const header = data[0]
    const today = useFreshDate()
    const now = TimeTable()
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1)
    
    return (
        <header className={clsx(headerStyle[`header_${theme}`])}>
            <div className={clsx(headerStyle.clubName, headerStyle[`clubName_${theme}`])}>
                <h1>{header.text1}</h1>
                <a href="https://www.kiis.ac.jp" target="blank" rel="noopener">{header.text2}</a>
            </div>
            <div className={clsx(headerStyle.clubNameFix)}>{header.text3}<br></br>{header.text4}</div>
            <div className={clsx(headerStyle.quickInfo, headerStyle[`quickInfo_${theme}`])}>
                <div className={clsx(headerStyle.info)} id={clsx(headerStyle.now)}>
                    <p>今 {now}</p>
                    <i className={header.quick_info[0].now_weather}></i>
                    <p>{header.quick_info[0].now_temperature}</p>
                </div>
                <WeatherIn3Hours today = {today} />
                <div className={clsx(headerStyle.info)} id={clsx(headerStyle.tomorrow)}>
                    <p>明日 ({tomorrow.getDate()}日)</p>
                    <i className={header.quick_info[2].tomorrow_weather}></i>
                    <p>{header.quick_info[2].tomorrow_temperature}</p>
                </div>
                <SubInfo today={today} now={now} tomorrow={tomorrow} />
            </div>
        </header>
    )
}

export default Header;