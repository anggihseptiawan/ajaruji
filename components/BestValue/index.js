import PriceCard from '../PriceCard';

const BestValue = () => {
    return(
        <section className="best_value bg-indigo-700 pt-16 pb-32" id="berlangganan">
            <div className="container mx-auto">
                <h5 className="text-2xl font-bold text-center mb-4">Penawaran Terbaik</h5>
                <p className="text-center font-medium mb-12">Dapatkan penawaran menarik untuk akses tak terhingga belajar dengan Ajar Uji.</p>
                <div className="flex px-12 sm:px-0">
                    <PriceCard icon="month" title="Rp39.000/Bulan" type="Bulanan" description="Akses tak terhingga dengan berlangganan bulanan di Ajar Uji." />
                    <PriceCard icon="year" title="Rp29.000/Bulan" type="Tahunan" description="Penawaran terbaik dengan berlangganan selama setahun." isBest />
                    <PriceCard icon="group" title="Rp500.000/Tahun" type="Grup" description="Belajar bersama dengan Ajar Uji bersama teman lebih menarik." />
                </div>
            </div>
        </section>
    )
}

export default BestValue;