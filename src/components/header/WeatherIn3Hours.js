
import clsx from 'clsx'
import headerStyle from '../../css/header.module.scss'
import data from '../text_data/homepage_text.json'

function WeatherIn3Hours ({ today }) {
    const header = data[0]
    const nextHours = ((today.getHours()+1) > 21 || (today.getHours()+1) < 5) ? 6 : today.getHours()+1

    const span = nextHours < 12 ? " am :" : " h :"
    const spann = nextHours+1 < 12 ? " am :" : " h :"
    const spannn = nextHours+2 < 12 ? " am :" : " h :"
    return (
        <div className={clsx(headerStyle.info)} id={clsx(headerStyle.weather)}>
            <p><i className={clsx("fas fa-map-marker-alt", headerStyle.info.i)}></i>{header.quick_info[1].place}</p>
            <p>{[nextHours, span, header.quick_info[1].next1].join(" ")}</p>
            <p>{[nextHours+1, spann, header.quick_info[1].next2].join(" ")}</p>
            <p>{[nextHours+2, spannn, header.quick_info[1].next3].join(" ")}</p>
        </div>
    )
}

export default WeatherIn3Hours