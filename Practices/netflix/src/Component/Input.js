export default function InputCustom({placeHolder,border}){
    return (
       <input placeHolder={placeHolder} style={{
        border: border == "solid" ? "5px solid red" : "5px dotted blue", width: 200, height:60, backgroundColor: "cyan", borderRadius: 20}}/>
    )
}