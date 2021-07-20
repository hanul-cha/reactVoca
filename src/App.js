import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
           <DayList />
          </Route>
          <Route path="/day">
            <Day />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Hello컴포넌트가 3개지만 state동작은 각각 실행되서 출돌하지 않는다.
