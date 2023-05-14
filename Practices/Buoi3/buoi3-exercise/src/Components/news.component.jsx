
function News(imageUrl, title,customLayout, imageWidth, grindColumn,gridRow){
    return(
        <div style={{
            display: "flex", 
            flexDirection:customLayout,
            justifyContent:"center", 
            grindColumn: grindColumn, 
            gridRow: gridRow}}>
            <img src={imageUrl} width={imageWidth}></img>
            <strong style={{textAlign:"left"}}>{title}</strong>
        </div>
    )
}

export default News;