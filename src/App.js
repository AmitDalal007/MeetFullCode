import './css/navbar.css'
import './css/home.css'
import './css/modal.css'
import './css/joinmeeting.css'
import './css/footer.css'

import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import JoinMeeting from './components/JoinMeeting.js'
import Footer from './components/Footer.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/joinmeeting">
            <JoinMeeting />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
