import React from 'react';
import './App.css';
import Header from './components/presentational/Header'
import LandingPage from './components/container/LandingPage'
import Detail from './components/container/Detail'
import Footer from './components/presentational/Footer'
import About from './components/presentational/About'
import Contact from './components/presentational/Contact'
import Profile from './components/container/Profile'
import PageNotFound from "./components/presentational/PageNotFound";
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
