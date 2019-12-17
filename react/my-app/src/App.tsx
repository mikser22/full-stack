import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import LeftMenu from "./components/LeftMenu";
import Board from "./components/Board";
import AdvertPage from "./components/AdvertPage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import AdvertCreate from "./components/AdvertCreate";
import './index.css';
import initStore from "./store";


const App: React.FC = () => {
  return (
      <Provider store={initStore()}>
          <div className='wrapper'>
              <Router>
                  <Header />
                  <LeftMenu />
                  <Route path="/" exact component={Board} />
                  <Route path="/category/:id" exact component={Board} />
                  <Route path="/advertpage/:id" component={AdvertPage} />
                  <Route path="/login" component={Login} />
                  <Route path="/registration" component={Registration} />
                  <Route path="/profile/:id" component={Profile} />
                  <Route path="/profile/" component={Profile} />
                  <Route path="/advertcreate" component={AdvertCreate} />
                  <footer> &#169; 2019</footer>
              </Router>
          </div>
      </Provider>
  )
};

export default App
