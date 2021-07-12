import logo from './logo.svg';
import './App.css';
import Register from './components/register'
import Dashboard from './components/dashboard'
// import LoginScreen from './components/login'
import Signup from './components/Signup';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Profile from './components/profile';
import Vote from './components/vote';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/vote" component={Vote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Signup />
//       </BrowserRouter>
//       {/* <Dashboard /> */}

//     </div>
//   );
// }

// export default App;
