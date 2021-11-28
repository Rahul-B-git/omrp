import { BrowserRouter as Router, Route} from "react-router-dom";
import logedInNavbar from "./components/logedin"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Recharge from "./components/Recharge"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Signup from "./components/Signup"
import rechargeSuccessfull from "./components/rechargeSuccesfull"
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
	  <Route path="/" exact >
          <logedInNavbar />
		  <Navbar />
          <Home />
          <Footer />
        </Route>
      <Route path="/recharge" exact>
        <logedInNavbar />
		<Navbar />
        <Recharge />
        <Footer />
      </Route>
	  <Route path="/Contact" exact>
        <Navbar />
        <Contact />
        <Footer />
      </Route>
      <Route path="/user/login" component={Login} />
      <Route path="/user/signup" component={Signup} />
      <Route path="/rechargeSuccessfull" component={rechargeSuccessfull} />
    </Router>
    
  );
}

export default App;
