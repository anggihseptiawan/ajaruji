import { Logo } from "../../assets/images/Logo Ajar Uji white.png";

const Navbar = () => {
	return (
		<div className="navbar flex justify-between">
			<img src={Logo} alt="logo-ajaruji" />
			<div className="links">
				<a href="#">Beranda</a>
				<a href="#">Uji Coba</a>
				<a href="#">Fitur</a>
				<a href="#">Berlangganan</a>
				<a href="#">Tentang Kami</a>
				<a href="#">Masuk</a>
			</div>
		</div>
	);
};

export default Navbar;
