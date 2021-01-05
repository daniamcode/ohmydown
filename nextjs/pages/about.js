import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

const About = (props) => {
  return (
    <>
    <Head>
      <title>About us</title>
      <meta description="What is Ohmydown all about?" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
    <main>
      <h1>About us</h1>
      <p>Ohmydown is a web service that offers you the opportunity to keep track of any website that you own —or not—, in terms of
        observability, that is, uptime, delays and more to come.
      </p>
    </main>
    </Layout>
    </>
  );
};

export default About;
