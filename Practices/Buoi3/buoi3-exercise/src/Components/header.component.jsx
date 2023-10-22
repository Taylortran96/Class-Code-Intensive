import CustomerMenu from "./menu.component";


function CustomerHeader(){
    return(
        <div className="custom-header">
            <CustomerMenu name="Xã hội"/>
            <CustomerMenu name="Chứng khoán"/>
            <CustomerMenu name="Bất Động Sản"/>
            <CustomerMenu name="Kinh tế"/>
            <CustomerMenu name="Thị trường"/>
            <CustomerMenu name="Vĩ Mô"/>
            <CustomerMenu name="Lifestyle"/>
        </div>
    )
}

export default CustomerHeader;
