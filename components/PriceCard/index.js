import Month from '../../assets/images/monthly.png';
import Year from '../../assets/images/yearly.png';
import Group from '../../assets/images/group.png';
import BestBadge from '../../assets/images/Group 1865.png';

const PriceCard = ({icon, title, type, description, isBest}) => {
    const PickImage = () => {
        if (icon === 'month') {
            return <img className="block mx-auto" src={Month} alt={title} />
        } else if (icon === 'year') {
            return <img className="block mx-auto" src={Year} alt={title} />
        } else if (icon === 'group') {
            return <img className="block mx-auto" src={Group} alt={title} />
        } else if (icon === 'user1') {
            return <img className="block mx-auto" src="https://www.flaticon.com/svg/static/icons/svg/2922/2922572.svg" alt={title} />
        } else if (icon === 'user2') {
            return <img className="block mx-auto" src="https://www.flaticon.com/svg/static/icons/svg/2922/2922510.svg" alt={title} /> 
        }
        return <img className="block mx-auto" src={Month} alt={title} />
    }

    return(
        <div className="price_card bg-white rounded-lg px-6 py-16 mx-6 relative sm:mb-4">
            {
                isBest && <img src={BestBadge} className="absolute top-0 right-0" alt={title} />
            }
            <div className="img-container">
                <PickImage />
            </div>
           <p className="font-bold text-center mt-4">{title}</p> 
           <p className="font-bold text-center my-2">{type}</p>
           <p className="text-center">{description}</p> 
        </div>
    )
}

export default PriceCard;