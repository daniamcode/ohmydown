import React from 'react';
import './App.css';
import Header from './components/presentational/Header'
import LandingPage from './components/container/LandingPage'
import Detail from './components/container/Detail'
import Footer from './components/presentational/Footer'
import About from './components/presentational/About'
import Contact from './components/presentational/Contact'
import Profile from './components/container/Profile'
import AutoLogin from './components/container/AutoLogin'
import PageNotFound from "./components/presentational/PageNotFound";
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

function App(props) {
	const token = useSelector((state) => state.googleReducer.authResponse.accessToken);
  return (
    <div className="container">
      <Header />
      
      <div className="margin-body">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				{/* <Route path="/profile">{token ? <Profile /> : <Redirect to='/' />}</Route> */}
				{/* {token ? <Route path="/profile" component={Profile} /> : <Route path="/profile" component={AutoLogin} />} */}
				<Route path="/profile" component={Profile} />
				<Route path="/detail/:url" component={Detail} />
				<Route component={PageNotFound} />
			</Switch>
			
		</div>

      <Footer />
    </div>
  );
}

export default App;
