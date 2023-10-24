import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./pages/Home"
import Chat from "./components/Chats"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route  path="/" exact component={Home}/>         
      </Switch>
      <Chat/>
      </Router>
    </div>
  );
}

export default App;
