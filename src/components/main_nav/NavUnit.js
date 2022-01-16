
import { memo } from 'react';

import clsx from 'clsx'
import mainStyle from '../../css/main.module.scss'

import Teaching from './navUnit/Teaching';
import AboutUs from './navUnit/AboutUs';
import Bus from './navUnit/Bus';
import Calendar from './navUnit/Calendar';
import Examinee from './navUnit/Examinee';
import FreeRoom from './navUnit/FreeRoom';
import InsideNews from './navUnit/InsideNews';
import Links from './navUnit/Links';
import Member from './navUnit/Member';
import OutsideNews from './navUnit/OutsideNews';

function NavUnit (props) {
    return (
        <div id = {props.id} className={clsx(mainStyle.navIcons)} onClick={props.onClick}>
            <i className={props.icon}></i>
            <span>{props.content}</span>
      </div>
    )
}

export { Teaching, AboutUs, Bus, Calendar, Examinee, FreeRoom, InsideNews, Links, Member, OutsideNews }

export default memo(NavUnit);