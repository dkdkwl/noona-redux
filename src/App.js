import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import Box from './component/Box';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count);


  const increase = ()=>{
    dispatch({type : "INCREMENT"})
  }
  return (
    <div className="App">
      <button onClick={()=>{
        increase()
      }}>따봉버튼</button>
      <p>클릭시 버튼이 올라갑니다👍 {count}</p>
      <Box/>      
    </div>
  );
}

export default App;
