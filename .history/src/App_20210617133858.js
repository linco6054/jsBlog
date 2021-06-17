import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dasboard/Dashboard";
import ProjectsDetails from "./components/projects/ProjectsDetails"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/Projects/:id" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
