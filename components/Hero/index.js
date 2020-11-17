import Navbar from "../Navbar";
import HeroImage from "../../assets/images/Home Illustration@2x.png";

const Hero = () => {
	return (
		<section className="hero pb-20">
			<div className="container mx-auto">
				<Navbar />
				<div className="flex mt-8">
					<div className="w-1/2 sm:w-full mt-20 sm:mt-0">
						<h4 className="font-bold text-5xl sm:text-2xl text-white mb-4">
							Platform Sekolah Online <br /> Yang Menyenangkan
						</h4>
						<p className="text-white mb-0">
							Belajar lebih mudah, kapanpun, dimanapun, <br />
						</p>
						<p className="text-white mb-16 sm:mb-8">
							mudah dijangkau hingga ke pelosok negeri.
						</p>
						<a
							href="#"
							className="font-bold bg-white text-blue-600 rounded-full px-8 py-3"
						>
							Mulai Belajar
						</a>
					</div>
					<div className="w-1/2 sm:w-full sm:mt-6">
						<img
							src={HeroImage}
							className="w-full"
							alt="hero-image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;