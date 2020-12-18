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
	const token = useSelector((state) => state.googleReducer.authResponse.tokenId);
  return (
    <div className="container">
      <Header />
      
      <div className="margin-body">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
	
				
				{/* {token ? <Route path="/profile" component={Profile} /> : <Route path='/profile' component={() => { 
     window.location.href = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=97800569171-m8ksj0r9al1sda4qk5la1puhajlmthgk.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A3000&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow'; 
     return null;
}}/>} */}
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
