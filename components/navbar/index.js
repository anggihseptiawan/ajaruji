import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="navbar flex justify-between items-center py-4">
			<img src="/images/Logo Ajar Uji white-1.png" alt="logo-ajaruji" />
			<div className="links">
				<div
					className="toggle-menu hidden sm:block cursor-pointer"
					onClick={() => setOpen(!open)}
				>
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
					<a
						href="#berlangganan"
						className="text-white font-bold mx-4 mb-2"
					>
						Berlangganan
					</a>
					<a
						href="#tentang_kami"
						className="text-white font-bold mx-4 mb-2"
					>
						Tentang Kami
					</a>
					<Link href="/auth">
						<a
							className="text-blue-600 bg-white px-10 py-2 rounded-full font-bold mx-4 mb-2"
							style={{ width: "max-content" }}
						>
							Masuk
						</a>
					</Link>
					<Link href="/category/teacher?status=approve">
						<a className="text-white font-bold mx-4 mb-2">Teacher</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
