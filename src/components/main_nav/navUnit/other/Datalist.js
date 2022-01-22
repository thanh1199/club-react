
import clsx from "clsx"
import datalist from "../../../../css/component/Datalist.module.scss"

function Datalist ({ 
    show=true, 
    theme="soft", 
    condition=true, 
    lists=[], 
    intimeValue="", 
    handleSelect=f=>f
}) 
{
    // const width = widthDependence.current ? widthDependence.current.clientWidth : 300

    const style = {
        display: show ? "block" : "none"
    }

    const intimeOption__ = intimeValue.trim()
    var intimeOption = intimeOption__
    if (intimeOption__ !== "") {
        const intimeOption_ = intimeOption__.replace(/[&¥/¥¥#,+$~%.`|'":*?<>{}]/g, '')
        intimeOption = lists[1].filter((option) => option.includes(intimeOption_))
    }

    const Option = ({ content }) => (<p 
        onMouseDown={() => handleSelect(content)}
        className={clsx(datalist.option)}
    >{content}</p>)

    return (
        <div style={style} className={clsx(datalist.container ,datalist[`container_${theme}`])}>{
            condition ? 
            lists[0].map((option, i) => <Option key={i} content={option} />)
            :
            intimeOption.map((option, i) => <Option key={i} content={option} />)
        }</div>
    )
}

export default Datalist