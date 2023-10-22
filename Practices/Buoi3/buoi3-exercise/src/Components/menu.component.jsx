function CustomerMenu ({name}){
    return(
        <div className="custom-menu">
            <span style ={{fontSize: "16px", fontWeight:"bold", color:"white", textTransform:"uppercase"
        }}>{name}</span>
        </div>
    )
}
export default CustomerMenu;