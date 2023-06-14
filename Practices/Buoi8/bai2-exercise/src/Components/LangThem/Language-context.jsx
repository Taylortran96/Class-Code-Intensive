import {createContext} from "react";  

const LanguageContext = createContext({
    language: "",
    setlanguage: () => {},
});

export default LanguageContext;

