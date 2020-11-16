import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ajaruji</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto">
				<Navbar />
			</div>
		</>
	);
}
