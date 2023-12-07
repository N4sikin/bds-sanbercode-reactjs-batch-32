import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//import context
import { MobileContext } from '../../context/mobileContext'

//import antd
import { Typography, Rate} from 'antd'

const SearchList = () => {
    const { Title, Text } = Typography
    const { valueOfSearch } = useParams()

    const { dataMobile, action } = useContext(MobileContext)
				
	const { fetchData } = action

	useEffect(() => {
    
		fetchData()

	}, []) // eslint-disable-line react-hooks/exhaustive-deps

    let tmpData = dataMobile
    const searchTmp = valueOfSearch.toLowerCase().trim()
    const filter = tmpData.filter(data => data.title.toLowerCase().includes(searchTmp))

    //console.log(filter)

    const platform = (a, b) => {
        if (a === 1 && b === 1) {
            return 'Android & IOS'
        } else if (a === 1) {
            return 'Android'
        } else if (b === 1) {
            return 'IOS'
        } else {
            return '-'
        }
    }

    const convertSize = (a) => {
        if (a > 1000) {
            return `${a / 1000} GB`
        } else {
            return `${a} MB`
        }
    }

    return (
        <div className="row">
            <div className="section">
                <Title className='card-title' style={{marginBottom: '30px'}} level={2}>Search Mobile List</Title>
                {filter.map(item => {
                    return (
                        <div className="card" key={item.id}>
                            <div>
                                <Title level={3}>{item.title}</Title>
                                <Title level={5}>Release Year : {item.year}</Title>
                                <img className="fakeimg" style={{width: '50%', height: '300px', objectFit: 'cover'}} src={item.image} alt='' />
                                <br />
                                <br />
                                <div>
                                    <Text strong>Price: {item.price > 0 ? `Rp ${item.price}` : 'Free'}</Text><br />
                                    <Text strong>Rating: </Text><Rate disabled value={item.rating} /><br />
                                    <Text strong>Size: {convertSize(item.size)}</Text><br />
                                    <Text strong>Platform : {platform(item.android, item.ios)}</Text>
                                    <br />
                                </div>
                                <p>
                                    <Text strong style={{marginRight: '5px'}}> Description :</Text>
                                    {item.description}
                                </p>

                                <hr />
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default SearchList