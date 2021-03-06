import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dasboard/Dashboard";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
