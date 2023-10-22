import './App.css';
import {useState} from 'react'

export default function App() {
  //Part 1: khai báo biến
  const [a,setChangeA] = useState(0);
  const [b,setChangeB] = useState(0);

  // Part2: khởi tạo
  const changeA =(a) =>{
    setChangeA (a);
  }
  const changeB = (b) => {
    setChangeB(b);
  }
  return (  
    //Part 3: đường dẫn truyền giá trị
    <div className="App" style={{marginTop: "5px"}}>
      <A changeA={changeA} a ={b}/>
      <B changeB={changeB} b={a}/>
    </div>
  );
}


  // Menu A:
  const A = (props) => {
    const [a, setA] = useState(0);
    return (
      <div style={{border: "2px solid black", backgroundColor:"lightblue", width:"100vh"}}>
        <p style={{color: "red", fontWeight:"bolder" }}>A - {props.a}</p>

        <button style={{background:"lightred"}} onClick={() => {
          //Part 4: Tạo giá trị
          setA(prev => {
            prev += 1
            props.changeA (prev)
            return prev 
          })
        }}>Add</button>
        
      </div>
    )
  }
  
  // Menu B
  const B = (props) => {
    const [b, setB] = useState(0);

    return (
      <div style={{border: "2px solid black", backgroundColor: "lightpink", width:"100vh"}}>
        <p style={{color: "red", fontWeight:"bolder"}}>B - {props.b}</p>
        
        <button style={{background:"lightred"}} onClick={() => {
          setB(element => {
            element += 1
            props.changeB (element)
            return element 
          })
        }}>Add</button>
      </div>
    )
  }

