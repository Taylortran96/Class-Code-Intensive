import './App.css';
import {useState} from 'react'

export default function App() {
  //Part 1: khai báo biến
  const [numb1, setNumb1] = useState(0);
  const [numb2, setNumb2] = useState(0);

  // Part2: khởi tạo
  const Click1 = (x) =>{
    setNumb1 (x);
  }
  const Click2 = (y) =>{
    setNumb2 (y);
  }

  return (  
    //Part 3: đường dẫn truyền giá trị
    <div className="App" style={{marginTop: "5px"}}>
      <A Click1 = {Click1} />
      <B Click2 ={Click2}/>
    </div>
  );
}


  // Menu A:
  const A = (props) => {
    const [numb1, setNumb1] = useState(0);
    return (
      <div style={{border: "2px solid black", backgroundColor:"lightblue", width:"100vh"}}>
        <p style={{color: "black", textTransform:"upper" }}>A - {numb1}</p>

        <button style={{background:"lightred"}} onClick={() => {
          //Part 4: Tạo giá trị
          setNumb1(prev => {
            prev += 1
            props.Click1 (prev)
            return prev 
          })
        }}>Click Button A</button>
        
      </div>
    )
  }
  
  // Menu B
  const B = (props) => {
    const [numb2, setNumb2] = useState(0);

    return (
      <div style={{border: "2px solid black", backgroundColor: "lightpink", width:"100vh"}}>
        <p style={{color: "black", textTransform:"upper" }}>B - {numb2}</p>
        
        <button style={{background:"lightred"}} onClick={() => {
          setNumb2(prev => {
            prev += 1
            props.Click2 (prev)
            return prev 
          })
        }}>Click Button B</button>

      </div>
    )
  }

