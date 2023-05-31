import MenuContainer from "../Components/Menu/menucomponent";
import LogoBrand from "../Components/Hot-news/logo-brand";
import HotNewsLists from "../Components/Hot-news/hotnewslist";
import RightButtons from "../Components/Hot-news/rightbtn";


export default function TopLayout(){
    const [theme, setTheme] = useDarkMode();
    return(
        <div className="top-box-layout">
            <div className="hot-news-component">
                <LogoBrand imgUrl="https://cafebiz.cafebizcdn.vn/web_images/cafebiz_logo_16052022.svg"/> 
                <div style={{ width: 250, height: 250 }} className="news-list">
                    <span>Mới nhất</span>
                    <HotNewsLists/>
                </div>
                <RightButtons/>
            </div>
            <div>
                <MenuContainer/>
            </div>  
        </div>
    )
}