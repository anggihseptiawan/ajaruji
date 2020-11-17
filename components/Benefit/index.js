import BenefitItem from "../BenefitItem";

const Benefit = () => {
	return (
		<section className="benefit py-20">
			<div className="container mx-auto">
				<h5 className="text-center font-bold text-2xl mb-2">
					Manfaat Yang Kamu Dapatkan
				</h5>
				<p className="text-center font-medium mb-16">
					Dapatkan pengalaman belajar terbaik dengan fitur menarik di
					Ajar Uji.
				</p>

				<div className="flex">
					<div className="w-1/5 sm:w-full px-2 mb-4">
						<BenefitItem
							icon="book"
							title="20.000 lebih soal Tersedia"
							description="Ajar uji memiliki bank soal lengkap, dengan 20.000 lebih soal tersedia"
						/>
					</div>
					<div className="w-1/5 sm:w-full px-2 mb-4">
						<BenefitItem icon="smile" title="Penjelasan yang menarik" description="Materi disajikan dengan car menarik, belajar jadi menyenangkan" />
					</div>
					<div className="w-1/5 sm:w-full px-2 mb-4">
						<BenefitItem icon="development" title="Rekam Perkembangan" description="Perkembangan nilai dapat dengan mudah dilihat dan dipantau" />
					</div>
					<div className="w-1/5 sm:w-full px-2 mb-4">
						<BenefitItem icon="access" title="Kemudahan Akses" description="Belajar dimanapun dan kapanpun dengan kemudahan akses Ajar uji" />
					</div>
					<div className="w-1/5 sm:w-full px-2 mb-4">
						<BenefitItem icon="study" title="Materi Pelajaran Lengkap" description="Ajar uji menyediakan mata pelajaran dan kurikulum yang lengkap" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefit;
