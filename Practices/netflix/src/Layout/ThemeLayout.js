import InputCustom from "../Component/Input"
import "./Theme.css"

export default function ThemeLayout({children}){
    return (
        <div className="theme container">
            {children}
        </div>
    )
}

export const ComponentName = "Theme"
export const ComponentName1 = "Theme"
export const ComponentName2 = "Theme"
export const ComponentName3 = "Theme"
export const cList = [0,1,2,3,4,5]

export function Hello(){
    console.log("Hello");
    return (
        <h1 className="theme">
            Hello
        </h1>
    )
}