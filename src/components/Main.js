
import clsx from 'clsx'
import mainStyle from '../css/main.module.scss'

import data from './text_data/homepage_text.json'
import NavUnit from './main_nav/NavUnit'

function Main({ theme }) {
    const main = data[1].apps

    return (<div className={clsx(mainStyle.main, mainStyle[`main_${theme}`])}>
        {main.map((unit, index) => {
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