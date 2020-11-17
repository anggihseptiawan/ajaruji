import Carousel, { consts } from 'react-elastic-carousel'

import Prev from '../../assets/images/arrow.png'
import Next from '../../assets/images/arrow-1.png'

const WhyUs = () => {
    const items = [
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'},
        {id: 6, title: 'item #6'},
        {id: 7, title: 'item #7'}
    ];

    const arrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? Prev : Next
        return (
            <button onClick={onClick} disabled={isEdge}>
                <img src={pointer} />
            </button>
        )
    }

    return(
        <div className="why_us py-10">
            <div className="container mx-auto px-20 sm:px-0">
                <h5 className="font-bold text-2xl text-center mb-4">Mengapa Memilih Ajar Uji?</h5>
                <p className="text-center mb-12">Ajar Uji memiliki banyak keunggulan yang menjadi pilihan terbaik. Berikut kata mereka yang telah bergabung dan belajar di Ajar Uji.</p>

                <Carousel itemsToShow={2} itemsToScroll={1} itemPadding={[10]} renderArrow={arrow}>
                    {items.map(item => {
                        return (
                            <div className="item" key={item.id}>
                                <img src="https://images.unsplash.com/photo-1605447385253-0e6d9eeedc8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="rounded-md" />
                            </div>
                        )
                    })}
                </Carousel> 
            </div>
        </div>
    )
}

export default WhyUs;