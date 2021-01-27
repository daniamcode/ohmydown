import React, {useEffect} from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import aboutStyles from "../styles/About.module.css";
import ReactGA from 'react-ga';
// import Image from 'next/image'

const About = (props) => {
  const example = require("../img/graphExample.png");
  useEffect(() => {
    ReactGA.pageview('/about');
  }, []);
 
  return (
    <>
    <Head>
      <title>About us</title>
      <meta description="What is Ohmydown all about?" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
    <main className={aboutStyles.about}>
      <div className={aboutStyles.about__container}>
      <h1>About us</h1>
      <p>Ohmydown is a web service that offers you the opportunity to keep track of any website that you own —or not—, in terms of
        observability, that is, uptime, delays and more to come.
      </p>
      </div>
      <div className={aboutStyles.about__container}>
      <h2>Vision</h2>
      <p>We want to offer easy access to everybody to this kind of information, with a very extensive free plan.
      </p>
      </div>
      <div className={aboutStyles.about__example}>
      <h2>Example</h2>
      <p>Here's a little example of what we offer, a delay chart of several urls that you can follow in your profile.
      </p>
      </div>
      <img
            src={example}
            alt="Example"
          />
    </main>
    </Layout>
    </>
  );
};

export default About;
