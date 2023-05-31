
import './App.css';
import Counter1 from './Component/Counter1';
import Counter2 from './Component/Counter2';
import FormContainer from './Component/Form';

export default function App() {
  return (
    <div className="App">
      <div className='counter-container'>
        <Counter1/>
        <Counter2/>
      </div>

      <FormContainer/>
    </div>
  );
}

