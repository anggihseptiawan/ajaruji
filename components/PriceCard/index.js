import Image from "next/image";

const PriceCard = ({ icon, title, type, description, isBest }) => {
	const PickImage = () => {
		if (icon === "month") {
			return (
				<Image
					className="block mx-auto"
					src="/images/monthly.png"
					alt={title}
				/>
			);
		} else if (icon === "year") {
			return (
				<Image className="block mx-auto" src="/images/yearly" alt={title} />
			);
		} else if (icon === "group") {
			return (
				<Image
					className="block mx-auto"
					src="/images/group.png"
					alt={title}
				/>
			);
		} else if (icon === "user1") {
			return (
				<Image
					className="block mx-auto"
					src="https://www.flaticon.com/svg/static/icons/svg/2922/2922572.svg"
					alt={title}
				/>
			);
		} else if (icon === "user2") {
			return (
				<Image
					className="block mx-auto"
					src="https://www.flaticon.com/svg/static/icons/svg/2922/2922510.svg"
					alt={title}
				/>
			);
		}
		return (
			<Image
				className="block mx-auto"
				src="/images/monthly.png"
				alt={title}
			/>
		);
	};

	return (
		<div className="price_card flex-1 bg-white rounded-lg px-6 pt-16 pb-8 mx-2 relative sm:mb-4">
			{isBest && (
				<Image
					src="/images/Group 1865.png"
					className="absolute top-0 right-0"
					alt={title}
				/>
			)}
			<div className="img-container">
				<PickImage />
			</div>
			<p className="font-bold text-center mt-4">{title}</p>
			<p className="font-bold text-center my-2">{type}</p>
			<p className="text-center h-32">{description}</p>
		</div>
	);
};

export default PriceCard;
