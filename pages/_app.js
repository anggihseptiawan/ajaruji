import Head from 'next/head';

import "../assets/styles/tailwind.css";
import Router from 'next/router'
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }) {

	let timer;
	let state;
	let activeRequests = 0;
	const delay = 250;

	function load() {
		if (state === "loading") {
			return;
		}

		state = "loading";

		timer = setTimeout(function () {
			NProgress.start();
		}, delay); // only show progress bar if it takes longer than the delay
	}

	function stop() {
		if (activeRequests > 0) {
			return;
		}

		state = "stop";

		clearTimeout(timer);
		NProgress.done();
	}

	// NProgress.configure({showSpinner: true})

	Router.events.on('routeChangeStart', load)
	Router.events.on('routeChangeComplete', stop)
	Router.events.on('routeChangeError', stop)

	return (
		<>
			<Head>
				<link rel="stylesheet" href="./css/nprogress.css"/>
			</Head>
			<Component {...pageProps} />
		</>
	) 
}

export default MyApp;
