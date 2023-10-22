import './App.css';
import Header from './Components/header';
import TopContainer from './Components/top-container';
import React,{ useState} from 'react';
import Main from './Components/main';
import Vietnamesedata from './data-vi';
import Englishdata from './data-en';
import CartItems from './Components/Cart/cart-items';
import ThemeContext from './Components/LangThem/Theme-context';
import LanguageContext from './Components/LangThem/Language-context';
import Switch from "react-switch";


export default function App() {
  const {products} = Vietnamesedata;  
  const [cartItems, setCartItems] = useState([])
  
  const onAdd = (product) => {
    const exist = cartItems.find ((x) => x.id === product.id)
    if (exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x))
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const onMinus = (product) => {
    const exist = cartItems.find ((x) => x.id === product.id)
    if (exist && exist.quanity === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x))
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find ((x) => x.id === product.id)
    if(exist === 0){
      setCartItems([...cartItems, {...product, quantity: 1}])
    } else{
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }
  }


  // Set theme, language
  const [language, setLanguage] = useState("vi");  
  const [theme, setTheme] = useState("light");


  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  
  return (
    <LanguageContext.Provider value={{language,setLanguage}}>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className="App"  id={theme}>
          <TopContainer/>
          <Header countCartItems={cartItems.length}/>
          <Switch 
            checked={theme === "dark"} 
            onChange={toggleTheme} />
          
          <div className='main-wrapper'>
            <Main onAdd={onAdd} products={products = language === "vi" ? Vietnamesedata.products : Englishdata.products} />
            <CartItems 
            onRemove={onRemove} 
            onMinus={onMinus} 
            onAdd={onAdd} 
            cartItems={cartItems}
            />
          </div>
      </div>  
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
  
}

