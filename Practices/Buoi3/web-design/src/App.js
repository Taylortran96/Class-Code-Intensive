import './App.css';
import TopLayout from './Main Layout/TopLayout'
import HighlightNewsLayout from './Components/MainNews/highlightnews';
import AppStyles from './App.module.css'



function App() {
  let theme ="light";
  return (
    <div className="App">
      <div className = {theme == "light" ? AppStyles.appDark : AppStyles.appLight}>
        <div className='e-magazine'>
          <h1 className='title'>Hi</h1>
        </div>
        
        <TopLayout/>

        <div className='highlight-news'>
          <HighlightNewsLayout/>
        </div>
      </div>

      
    </div>
  );
}

export default App;
