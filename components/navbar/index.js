import Logo from "../../assets/images/Logo Ajar Uji white.png";

const Navbar = () => {
	return (
		<div className="navbar flex justify-between items-center py-4">
			<img src={Logo} alt="logo-ajaruji" />
			<div className="links">
				<div className="toggle-menu hidden sm:flex">
					<span>1</span>
					<span>2</span>
					<span>3</span>
				</div>
				<div className="nav-menu sm:hidden">
					<a href="#" className="text-white font-bold mx-4">
						Beranda
					</a>
					<a href="#" className="text-white font-bold mx-4">
						Uji Coba
					</a>
					<a href="#" className="text-white font-bold mx-4">
						Fitur
					</a>
					<a href="#" className="text-white font-bold mx-4">
						Berlangganan
					</a>
					<a href="#" className="text-white font-bold mx-4">
						Tentang Kami
					</a>
					<a
						href="#"
						className="text-blue-600 bg-white px-6 py-2 rounded-full font-bold mx-4"
					>
						Masuk
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
