import Book from "../../assets/images/bank soal.png";
import Smile from "../../assets/images/Group 5.png";
import Development from "../../assets/images/Group 3.png";
import Access from "../../assets/images/Group 2.png";
import Book1 from "../../assets/images/book.png";

const BenefitItem = ({ icon, title, description }) => {
	const PickIcon = () => {
		if (icon === "book") {
			return <img src={Book} alt={title} />;
		} else if (icon === "smile") {
			return <img src={Smile} alt={title} />;
		} else if (icon === "developmet") {
			return <img src={Development} alt={title} />;
		} else if (icon === "access") {
			return <img src={Access} alt={title} />;
		} else if (icon === "study") {
			return <img src={Book1} alt={title} />;
		}
		return <img src={Book} alt={title} />;
	};

	return (
		<div className="benefit-item">
			<div
				className={`img-container ${icon} mx-auto flex justify-center items-center mb-4`}
			>
				<PickIcon />
			</div>
			<span className="title text-center font-bold block mb-3">
				{title}
			</span>
			<p className="text-center font-medium">{description}</p>
		</div>
	);
};

export default BenefitItem;
