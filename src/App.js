import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import EmptyPage from "./component/EmptyPage";


function App() {
  return (
    <BrowserRouter> {/* 앱전체를 감쌈 */}
      <div className="App">
        <Header />
        <Switch> {/* 고정적인 컨텐츠는 스위치 밖에 위치 ex) header, footer */}
          <Route exact path="/">
           <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Hello컴포넌트가 3개지만 state동작은 각각 실행되서 출돌하지 않는다.
