import Head from "next/head";
import Hero from "../components/Hero";
import Benefit from "../components/Benefit";
import Demo from "../components/Demo";
import WhoWeAre from '../components/WhoWeAre';
import BestValue from '../components/BestValue';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ajaruji</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			<Benefit />
			<Demo />
			<WhoWeAre />
			<BestValue />
			<WhyUs />
			<Footer />
		</>
	);
}
