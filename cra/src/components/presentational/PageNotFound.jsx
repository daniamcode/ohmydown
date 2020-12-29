import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/PageNotFound.css";


function PageNotFound() {
	return (
		<main className="page-not-found__container">
            <section className="page-not-found__message">
			<h1 className="page-not-found__title">Error - 404</h1>
			<p className="page-not-found__text">Ups, no content here</p>
			<Link className="page-not-found__link" to="/">Back to Home</Link>
			</section>
		</main>
	);
}

export default PageNotFound;
