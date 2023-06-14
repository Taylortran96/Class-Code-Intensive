import React from "react";
import { useContext } from "react";
import LanguageContext from "./languagecontext";

export default function Header (props) {
    const {username} = props;
    const {language, setLanguage} = useContext(LanguageContext);

    return( 
        <header className="header">
            <p className="logo"> MindX</p>

            {username ?
                <p className="welcome">{language === "vi"? `Chào mừng, ${username} `:`Welcome, ${username}`}</p> :
                <p className="login-header">{language === "vi" ? "Đăng nhập": "Log In"}</p>
            }
        </header>
    )
}