import CustomerHeader from "../Components/header.component"
import TopLayout from "./toplayout";

function MainLayout(){
    return(
        <div className="main-layout">
            <CustomerHeader></CustomerHeader>
            <TopLayout></TopLayout>
        </div>
    )
}
export default MainLayout;