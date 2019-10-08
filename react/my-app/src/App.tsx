import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import LeftMenu from "./components/LeftMenu";
import Board from "./components/Board";
import AdvertPage from "./components/AdvertPage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AdvertCreate from "./components/AdvertCreate";
import './index.css';


const App: React.FC = () => {
  return (
      <div className='wrapper'>
          <Router>
              <Header />
              <LeftMenu />
              <Route path="/" exact component={Board} />
              <Route path="/advertpage/:id" component={AdvertPage} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/advertcreate" component={AdvertCreate} />
              <footer> &#169; 2019</footer>
          </Router>
      </div>
  )
};

export default App
