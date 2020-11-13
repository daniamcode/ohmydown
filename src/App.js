import React from 'react';
import './App.css';
import Header from './components/Header'
import Grid from './components/Grid'
import Detail from './components/Detail'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App(props) {
  return (
    <Router>
    <div className="container">
      <Header />
      
      <div>
			
			<Switch>
				<Route path="/" exact component={Grid} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/:url" component={Detail} />
				
			</Switch>
			
		</div>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
