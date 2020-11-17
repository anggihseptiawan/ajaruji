import Carousel from 'react-elastic-carousel';

const WhoWeAre = () => {
    const items = [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'},
        {id: 6, title: 'item #6'},
        {id: 7, title: 'item #7'}
    ];

    return(
        <section className="who_we_are py-10">
            <div className="container mx-auto">
                <h5 className="font-bold text-2xl text-center mb-4">Apa itu Ajar Uji?</h5>
                <p className="text-center font-medium mb-12">Ajar Uji merupakan platform belajar online yang mempermudah siswa, guru, dan sekolah dalam melaksanakan kegiatan belajar dan mengajar. Ajr Uji menyediakan kelas online, penjelasan yang disajikan menarik, bank soal, mata pelajaran dan kurikulum yang lengkap.</p>

                <Carousel itemsToShow={3} itemsToScroll={1} itemPadding={[5]} showArrows={false}>
                    {items.map(item => {
                        return (
                            <div className="item" key={item.id}>
                                <img src="https://images.unsplash.com/photo-1605447385253-0e6d9eeedc8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded-md" />
                            </div>
                        )
                    })}
                </Carousel>   
            </div>
        </section>
    )
}

export default WhoWeAre