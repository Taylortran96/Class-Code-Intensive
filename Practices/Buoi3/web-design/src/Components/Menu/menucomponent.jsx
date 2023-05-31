import CustomMenu from "./custommenu"
import { BiHome, BiFileFind } from "react-icons/bi"


export default function MenuContainer(){
    return(
    <div className="menu-container">
        <div className="home-icon">
            <BiHome></BiHome>
        </div>
        <CustomMenu name="Xã hội"/>
        <CustomMenu name="Chứng khoán"/>
        <CustomMenu name="Bất động sản"/>
        <CustomMenu name="Doanh nghiệp"/>
        <CustomMenu name="Ngân hàng"/>
        <CustomMenu name="Tài chính"/>
        <CustomMenu name="Thị trường"/>
        <CustomMenu name="lifestyles"/>

        <div className="find-icon">
            <BiFileFind></BiFileFind>
        </div>
    </div>
    )
}