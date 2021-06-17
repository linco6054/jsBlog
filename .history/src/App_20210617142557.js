import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dasboard/Dashboard";
import ProjectsDetails from "./components/projects/ProjectsDetails";
import Signin from "./components/auth/Signin";
import SignUp from "./components/auth/SignUp";
import 
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Projects/:id" component={ProjectsDetails} />
        <Route path="/signin" component={Signin} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
