import Carousel from "react-elastic-carousel";
import Image from "next/image";

const WhoWeAre = () => {
	const items = [
		{
			id: 1,
			title:
				"https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		},
		{
			id: 2,
			title:
				"https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80",
		},
		{
			id: 3,
			title:
				"https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
		},
		{
			id: 4,
			title:
				"https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
		},
		{
			id: 5,
			title:
				"https://images.unsplash.com/photo-1580968895877-a19ec54aadc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		},
	];

	const breakPoints = [
		{ width: 1, itemsToShow: 1, itemPadding: [0] },
		{ width: 550, itemsToShow: 3, itemsToScroll: 1 },
	];

	return (
		<section className="who_we_are py-10" id="tentang_kami">
			<div className="container mx-auto">
				<h5 className="font-bold text-2xl text-center mb-4">
					Apa itu Ajar Uji?
				</h5>
				<p className="text-center font-medium mb-12">
					Ajar Uji merupakan platform belajar online yang mempermudah
					siswa, guru, dan sekolah dalam melaksanakan kegiatan belajar dan
					mengajar. Ajr Uji menyediakan kelas online, penjelasan yang
					disajikan menarik, bank soal, mata pelajaran dan kurikulum yang
					lengkap.
				</p>

				<Carousel
					itemsToShow={3}
					itemsToScroll={1}
					itemPadding={[5]}
					showArrows={false}
					breakPoints={breakPoints}
				>
					{items.map((item) => {
						return (
							<div className="item" key={item.id}>
								<Image src={item.title} className="rounded-md" />
							</div>
						);
					})}
				</Carousel>
			</div>
		</section>
	);
};

export default WhoWeAre;
