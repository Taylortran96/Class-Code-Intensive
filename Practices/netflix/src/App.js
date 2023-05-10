import logo from './logo.svg';
import './App.css';
import ThemeLayoutComponent, {ComponentName,ComponentName1, Hello,cList} from './Layout/ThemeLayout';
import InputCustom from './Component/Input';

function App() {
  
  return (
    <div className="App">
      {cList}
      <Hello/>
      <ThemeLayoutComponent>

            <InputCustom placeHolder="Username" border="solid"/>
            <InputCustom placeHolder="Password" border="dotted"/>
      </ThemeLayoutComponent>
    </div>
  );
}

export default App;
