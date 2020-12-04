import Carousel from "react-elastic-carousel";
import PriceCard from "../PriceCard";
import Image from "next/image";

const WhyUs = () => {
	const arrow = ({ onClick, isEdge }) => {
		return (
			<button onClick={onClick} disabled={isEdge}>
				<Image src="/images/arrow-1.png" />
			</button>
		);
	};

	const breakPoints = [
		{ width: 1, itemsToShow: 1, itemPadding: [0] },
		{ width: 550, itemsToShow: 2, itemsToScroll: 1 },
	];

	return (
		<section className="why_us py-10">
			<div className="container mx-auto px-20 sm:px-0">
				<h5 className="font-bold text-2xl text-center mb-4">
					Mengapa Memilih Ajar Uji?
				</h5>
				<p className="text-center mb-12">
					Ajar Uji memiliki banyak keunggulan yang menjadi pilihan terbaik.
					Berikut kata mereka yang telah bergabung dan belajar di Ajar Uji.
				</p>

				<Carousel
					itemsToShow={2}
					itemsToScroll={1}
					itemPadding={[10]}
					renderArrow={arrow}
					breakPoints={breakPoints}
				>
					<PriceCard
						icon="user1"
						title="Ria Kamila"
						type="Siswi SMP Jakarta"
						description="Ajaruji mempermudah saya dalam memahami mata pelajaran yang sebelumnya tidak saya mengerti. kini nilai saya menjadi lebih baik."
					/>
					<PriceCard
						icon="user2"
						title="Samuel"
						type="Siswa SMP Yogyakarta"
						description="Cara penyampaian materi yang menarik, tidak membuat bosan, dan saya sangat senang belajar dengan Ajaruji ."
					/>
					<PriceCard
						icon="user1"
						title="Ria Kamila"
						type="Siswi SMP Jakarta"
						description="Ajaruji mempermudah saya dalam memahami mata pelajaran yang sebelumnya tidak saya mengerti. kini nilai saya menjadi lebih baik."
					/>
				</Carousel>
			</div>
		</section>
	);
};

export default WhyUs;
