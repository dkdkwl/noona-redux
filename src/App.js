import { useState } from 'react';
import './App.css';
import {useDispatch} from 'react-redux';


function App() {
  const [number,setNumber] = useState(0);
  const dispatch = useDispatch();


  const count = ()=>{
    dispatch({type : "INCREMENT"})
    setNumber(number + 1)
  }
  return (
    <div className="App">
      <button onClick={()=>{
        count();
      }}>따봉버튼</button>
      <p>클릭시 버튼이 올라갑니다👍 {number}</p>      
    </div>
  );
}

export default App;
