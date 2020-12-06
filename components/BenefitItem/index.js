import Image from "next/image";

const BenefitItem = ({ icon, title, description }) => {
	const PickIcon = () => {
		if (icon === "book") {
			return <img src="/images/bank soal.png" alt={title} />;
		} else if (icon === "smile") {
			return <img src="/images/Group 5.png" alt={title} />;
		} else if (icon === "developmet") {
			return <img src="/images/Group 3.png" alt={title} />;
		} else if (icon === "access") {
			return <img src="/images/Group 2.png" alt={title} />;
		} else if (icon === "study") {
			return <img src="book.png" alt={title} />;
		}
		return <img src="/images/bank soal.png" alt={title} />;
	};

	return (
		<div className="benefit-item">
			<div
				className={`img-container ${icon} mx-auto flex justify-center items-center mb-4`}
			>
				<PickIcon />
			</div>
			<span className="title text-center font-bold block mb-3">{title}</span>
			<p className="text-center font-medium">{description}</p>
		</div>
	);
};

export default BenefitItem;
