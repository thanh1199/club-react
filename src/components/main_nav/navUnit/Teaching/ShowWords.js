


function ShowWords ({ words, onClick = f => f, isArray = false}) {
    const style = {
        display: isArray ? "block" : "inline-block",
        padding: "10px 20px",
        fontSize: "16px",
        color: "rgb(70, 200, 200)",
        cursor: "pointer"
    }
    return (<>{
        words.map((word, i) => {
            return (
                <span key={i} onClick={() => onClick(word)} style={style} > {word} </span>
            )
        })
    }</>)
}
export default ShowWords