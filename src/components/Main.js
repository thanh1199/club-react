
import clsx from 'clsx'
import main from '../css/main.module.scss'
import "../css/reset.css"

import data from './text_data/homepage_text.json'
import NavUnit from './main_nav/NavUnit'

function Main({ theme }) {
    const mainData = data[1].apps

    return (<div className={clsx(main.main) + ` body_${theme}`}>
        {mainData.map((unit, index) => {
            return (<NavUnit 
                key={index}
                id={unit.id}
                icon={unit.icon} 
                content={unit.content} 
            />)
        })}
    </div>)
}

export default Main;