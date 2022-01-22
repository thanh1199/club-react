

function DifficulityChart ({ theme }) {
    const difficult = 0.6
    return (<>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px"
        }}><span>簡単</span><span>難しい</span></div>
        <div style={{
            width: "100%",
            height: "10px",
            borderRadius: "5px",
            border: theme === "soft" ? "1px solid rgb(0, 165, 177)" : "1px solid rgb(149, 248, 255)",
            position: "relative",
            zIndex: "5"
        }}><span style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "8px",
            backgroundColor: theme === "soft" ? "rgb(0, 165, 177)" : "rgb(149, 248, 255)",
            borderRadius: "4px 2px 2px 4px",
            boxShadow: theme === "soft" ? "unset" : "0 0 4px 1px rgb(149, 248, 255)",
            width: `${difficult>50 ? difficult*100-1 : difficult*100+1}%`
        }}></span></div>
    </>)
}

export default DifficulityChart