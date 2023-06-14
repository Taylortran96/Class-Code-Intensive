import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import Header from './Components/header';
import LoginForm from './Components/loginform';
import Footer from './Components/footer';
import LanguageContext from './Components/languagecontext';

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const {language,setLanguage} = useContext(LanguageContext);
  

// lưu trữ thông tin username vào trong state của component cha, và truyền nó vào component con LoginForm thông qua props
  const handleLogin = (event) => {
    event.preventDefault();
    const usernameInput = event.target.elements.username.value;
    if (usernameInput !== "") {
      setUsername(usernameInput);
      setIsLoggedIn(true);
    }
  };
  
  useEffect(() => {
    if (isLoggedIn) {
      setWelcomeMessage(
        `${username}`
      )
    } else {
      setWelcomeMessage('');
    }
  }, [isLoggedIn, username]);

  useEffect(() => {
    if (language === 'en') {
      setWelcomeMessage(`Welcome ${username}`);
    } else {
      setWelcomeMessage(`Chào mừng ${username}`);
    }
  }, [language, username]);

  const onSelectLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <LanguageProvider >
      <div className="App">
        <Header username={username}/>
        
        <div className='login-form'>
          {isLoggedIn ? (
              <p className='welcomeMessage'>{welcomeMessage}</p>
          ) : (
            <LoginForm handleLogin={handleLogin} username={username}/>
          )}
        </div>
        
        <Footer onSelectLanguage={onSelectLanguage} language={language}/>
      </div>
    </LanguageProvider>
  );
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('vi');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
