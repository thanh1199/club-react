
import clsx from "clsx"
import datalist from "../../../../css/mainUnit/Datalist.module.scss"

function Datalist ({ 
    show=true, 
    mode="darkMode", 
    condition=true, 
    lists=[], 
    intimeValue="", 
    handleSelect=f=>f, 
    dependenceWidth 
}) 
{
    if (dependenceWidth.current) {console.log(dependenceWidth.current.clientWidth)}
    const width = dependenceWidth.current ? dependenceWidth.current.clientWidth : 300

    const style = {
        display: show ? "block" : "none",
        backgroundColor: mode === "darkMode" ? "black" : "white",
        color: mode === "darkMode" ? "white" : "black",
        width: `${width*0.95}px`
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
        <div style={style} className={clsx(datalist.container)}>{
            condition ? 
            lists[0].map((option, i) => <Option key={i} content={option} />)
            :
            intimeOption.map((option, i) => <Option key={i} content={option} />)
        }</div>
    )
}

export default Datalist