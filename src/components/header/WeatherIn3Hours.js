
import { useState } from 'react' 
import { useEffect } from 'react'

import clsx from 'clsx'
import headerStyle from '../../css/header.module.scss'
import data from '../text_data/homepage_text.json'

const header = data[0]

function WeatherIn3Hours () {
    const [nextHours, setNextHours] = useState(new Date().getHours() + 1)

    useEffect(() => 
        setInterval(() => 
            setNextHours(() => {
                return (new Date().getHours() + 1)
            }), 60000)
    , [])
    let nextHours_ = nextHours
    if (nextHours_ > 21 || nextHours_ < 5) {
        nextHours_ = 6
    }
    const span = nextHours_ < 12 ? " am :" : " h :"
    const spann = nextHours_+1 < 12 ? " am :" : " h :"
    const spannn = nextHours_+2 < 12 ? " am :" : " h :"
    return (
        <div className={clsx(headerStyle.info)} id={clsx(headerStyle.weather)}>
            <p><i className={clsx("fas fa-map-marker-alt", headerStyle.info.i)}></i>{header.quick_info[1].place}</p>
            <p>{[nextHours_, span, header.quick_info[1].next1].join(" ")}</p>
            <p>{[nextHours_+1, spann, header.quick_info[1].next2].join(" ")}</p>
            <p>{[nextHours_+2, spannn, header.quick_info[1].next3].join(" ")}</p>
        </div>
    )
}

export default WeatherIn3Hours