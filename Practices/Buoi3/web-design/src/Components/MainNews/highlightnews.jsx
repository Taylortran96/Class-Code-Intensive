
export default function HighlightNewsLayout({imageUrl, imgWidth, customLayout, imgHeight, title, gridColumn, gridRow}){
    return (    
        <div 
        style ={{
            display: "flex", 
            flexDirection: customLayout,
            justifyContent: "flex-start", 
            gridColumn: gridColumn, 
            gridRow: gridRow,
            cursor: "pointer" }}>
            
            <img src = {imageUrl} width ={imgWidth} height ={imgHeight} ></img>
            <strong style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "20px",
                color: "black",
                marginTop: "10px",
                marginBottom: "10px",
            }}>{title}</strong>

        </div>
    )
}