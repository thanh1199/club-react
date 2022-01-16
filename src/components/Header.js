

import clsx from 'clsx'
import headerStyle from './../css/header.module.scss'
import data from './text_data/homepage_text.json'

import SubInfo, { NowTime, Tomorrow } from './header/SubInfo'
import WeatherIn3Hours from './header/WeatherIn3Hours'

const header = data[0]
function Header( props ) {
    const mode = props.mode
    
    return (
        <header className={clsx(headerStyle[mode])}>
            <div className={clsx(headerStyle.header, headerStyle[`header_${mode}`])}>
                <h1>{header.text1}</h1>
                <a href="https://www.kiis.ac.jp" target="blank" rel="noopener">{header.text2}</a>
            </div>
            <div className={clsx(headerStyle.headerFix)}>{header.text3}<br></br>{header.text4}</div>
            <div className={clsx(headerStyle.quickInfo, headerStyle[`quickInfo_${mode}`])}>
                <div className={clsx(headerStyle.info)} id={clsx(headerStyle.now)}>
                    <p>今 <NowTime /></p>
                    <i className={header.quick_info[0].now_weather}></i>
                    <p>{header.quick_info[0].now_temperature}</p>
                </div>
                <WeatherIn3Hours />
                <div className={clsx(headerStyle.info)} id={clsx(headerStyle.tomorrow)}>
                    <p>明日 (<Tomorrow />日)</p>
                    <i className={header.quick_info[2].tomorrow_weather}></i>
                    <p>{header.quick_info[2].tomorrow_temperature}</p>
                </div>
                <SubInfo />
            </div>
        </header>
    )
}

export default Header;