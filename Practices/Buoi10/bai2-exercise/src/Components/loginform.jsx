import React, {useContext} from "react";
import LanguageContext from "./languagecontext";

export default function LoginForm(props) {
    const {handleLogin} = props;
    const {language, setLanguage} = useContext(LanguageContext);
    return(
        <div className="login-container">
            <p>{language === "vi" ? "Đăng nhập": "Log In"} </p>
            <form className="form-container" onSubmit={handleLogin}>
                    <input type="text" name="username" placeholder={language === "vi" ? "Nhập Tên Đăng Nhập ....": "Enter Username...." } ></input>
                    <button type="submit">{language === "vi" ? "Đăng nhập": "Log In"}</button>
            </form>
        </div>
    )
};
