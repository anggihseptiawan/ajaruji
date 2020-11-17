import { useState } from 'react';
import Logo from "../../assets/images/Logo Ajar Uji white.png";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="navbar flex justify-between items-center py-4">
			<img src={Logo} alt="logo-ajaruji" />
			<div className="links">
				<div className="toggle-menu hidden sm:block cursor-pointer" onClick={() => setOpen(!open)}>
					<div className="dots flex justify-between">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<small className="text-white">menu</small>
				</div>
				<div className={`nav-menu sm:hidden ${open ? "active" : ""}`}>
					<a href="#beranda" className="text-white font-bold mx-4 mb-2">
						Beranda
					</a>
					<a href="#demo" className="text-white font-bold mx-4 mb-2">
						Uji Coba
					</a>
					<a href="#fitur" className="text-white font-bold mx-4 mb-2">
						Fitur
					</a>
					<a href="#berlangganan" className="text-white font-bold mx-4 mb-2">
						Berlangganan
					</a>
					<a href="#tentang_kami" className="text-white font-bold mx-4 mb-2">
						Tentang Kami
					</a>
					<a
						href="#"
						className="text-blue-600 bg-white px-6 py-2 rounded-full font-bold mx-4 mb-2"
					>
						Masuk
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
