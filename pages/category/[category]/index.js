import {useRouter} from 'next/router'

const Category = () => {
    const router = useRouter()
    const {category, status} = router.query;

    return(
        <div>
            <h1>Category {category} and the status is {status}</h1>
        </div>
    )
}

export default Category