import React from "react";
import LanguageContext from "./languagecontext";
import { useContext } from "react";

export default function Footer() {
    const {language, setLanguage} = useContext(LanguageContext);
    
	const onSelectLanguage = (event) => {
		setLanguage(event.target.value)
	}

    return(
        <footer className="footer">
            <select value={language} onChange={onSelectLanguage}>
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
            </select>
        </footer>
    )
};
