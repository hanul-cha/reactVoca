import './App.css';
import Hello from './component/Hello';
/* import styles from "./App.module.css"; */

function App() {
  return (
    <div className="App">
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
      
    </div>
  );
}

export default App;

//Hello컴포넌트가 3개지만 state동작은 각각 실행되서 출돌하지 않는다.
