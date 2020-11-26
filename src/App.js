import React from 'react';
import './App.css';
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Detail from './components/Detail'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



function App(props) {
  return (
    <Router>
    <div className="container">
      <Header />
      
      <div>
			
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/profile" component={Profile} />
				<Route path="/detail/:url" component={Detail} />
				<Route component={PageNotFound} />
			</Switch>
			
		</div>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
