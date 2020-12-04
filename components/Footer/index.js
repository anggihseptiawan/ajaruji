import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-indigo-700 mt-16 py-8 sm:mt-6">
			<div className="container mx-auto">
				<div className="flex border-b-2 border-gray-500 pt-4 pb-8">
					<div className="img-container w-1/2 sm:w-full sm:mb-8">
						<Image
							src="/images/Logo Ajar Uji white-1.png"
							alt="logo-ajaruji"
						/>
					</div>
					<div className="w-1/2 sm:w-full sm:mb-8 address pr-16">
						<h5 className="text-white font-bold mb-4">Address</h5>
						<p className="text-white font-medium">
							Jl. Warung Buncit Raya No. 40D, RT.1 / RW.2, Duren Tiga,
							kec. Pancoran, Kota Jakarta Selatan, Daerah khusus ibukota
							Jakarta 12760
						</p>
					</div>
					<div className="w-1/4 sm:w-full sm:mb-8 about">
						<h5 className="text-white font-bold mb-4">About</h5>
						<a href="#" className="text-white font-medium block">
							Home
						</a>
						<a href="#" className="text-white font-medium block">
							Privacy Policy
						</a>
					</div>
					<div className="w-1/4 sm:w-full sm:mb-8 contact">
						<h5 className="text-white font-bold mb-4">Contact</h5>
						<div className="flex mb-2">
							<Image
								className="mr-2"
								src="/images/mail.png"
								alt="email ajaruji"
							/>
							<span className="font-medium text-white">
								info@ajaruji.com
							</span>
						</div>
						<div className="flex mb-2">
							<Image
								className="mr-2"
								src="images/instagram.png"
								alt="email ajaruji"
							/>
							<span className="font-medium text-white">ajaruji</span>
						</div>
						<div className="flex mb-2">
							<Image
								className="mr-2"
								src="/images/whatsapp.png"
								alt="email ajaruji"
							/>
							<span className="font-medium text-white">
								0812-1314-1516
							</span>
						</div>
					</div>
				</div>

				<div className="copyright mt-4">
					<p className="font-medium text-white">
						&copy; Copyright Ajar Uji - All Right Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
