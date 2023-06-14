import React from "react";
import { useContext } from "react";
import LanguageContext from "./LangThem/Language-context";
import ThemeContext from "./LangThem/Theme-context";
export default function TopContainer(){   
    const { language, setLanguage} = useContext(LanguageContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const handleLanguageChange = () => {
        const newLang = language === "vi" ? "en" : "vi";
        setLanguage(newLang);
    };

    return(
        <div className="top-container" id={theme}>
            <div className="left-wrapper">
                <p>{language === "vi" ? "Kênh người bán": "Seller Channel" }</p>
                <p>{language === "vi" ?  "Trở thành người bán Shopee": "Becoming Shopee seller"}</p>
                <p>{language === "vi" ?  "Tải ứng dụng": "Download App"}</p>
                <p>{language === "vi" ? "Trở thành người bán Shopee Kết nối": "Becoming Shopee Connected Seller" }</p>
            </div>
            <div className="right-wrapper">
                <p>{language === "vi" ?"Thông báo":"Notification"  }</p>
                <p>{language === "vi" ?"Hỗ trợ":  "Support" }</p>
                <p>{language === "vi" ? "Đăng ký": "Sign Up"}</p>
                <p>{language === "vi" ? "Đăng nhập": "Log In"}</p>
                <p onClick={handleLanguageChange} className="language-btn"> {language === "vi" ?"Ngôn ngữ": "Language"}</p>
            </div>
        </div>
    )        
}