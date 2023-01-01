import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import Box from './component/Box';

function App() {
  const dispatch = useDispatch();
  let count = useSelector(state=>state.count);
  let id = useSelector(state=>state.id);
  let password = useSelector(state=>state.password);

  const increase = ()=>{
    dispatch({type : "INCREMENT",payload:{num:5}})
  }
const login = ()=>{
  dispatch({type:"LOGIN",payload:{id:"noona",password : "123"}})
}
const decrease = ()=>{
  dispatch({type:"DECREASE"})
}

  return (
    <div className="App">
      <button onClick={()=>{
        increase()
      }}>따봉버튼</button>
      <button onClick={login}>로그인</button>
      <p>클릭시 버튼이 올라갑니다👍 {count}</p>
      <Box/>
      <h1>{id},{password}</h1>
      <button onClick={()=>{
        decrease();
      }}>감소</button>
    </div>
  );
}

export default App;
