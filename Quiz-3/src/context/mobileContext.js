import { createContext, useState } from "react";
import axios from 'axios'

export const MobileContext = createContext()

export const MobileProvider = props => {

	const [currentId, setCurrentId] = useState(null)
	const [dataMobile, setDataMobile] = useState([])
    const [selectedDataMobile, setSelectedDataMobile] = useState(
        {
            id: 0, 
            created: '',
            updated: '',
            title: '',
            description: '',
            category: '',
            size: 0,
            price: 0,
            rating: 0,
            image: '',
            year: 0,
            android: 0,
            ios: 0
        }
    )

    const fetchData = async () => {
			try {
				const result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
                setDataMobile(result.data.map(item => { return (
                    {
                        id: item.id, 
                        created: item.created_at,
                        updated: item.updated_at,
                        title: item.name,
                        description: item.description,
                        category: item.category,
                        size: item.size,
                        price: item.price,
                        rating: item.rating,
                        image: item.image_url,
                        year: item.release_year,
                        android: item.is_android_app,
                        ios: item.is_ios_app,
                        key: item.id
                    }
                )}))
			} catch (err) {
                alert(err.message)
            }
        
    }

    const addData = (data) => {
        return new Promise( function (resolve, reject){
            let android = 0
            let ios = 0
            if (data.platform.length > 1) {
                android = 1
                ios = 1
            } else {
                if (data.platform[0] === 'android') {
                    android = 1
                } else {
                    ios = 1
                }
            }
            axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {
                name: data.title, 
                description: data.description, 
                category: data.category, 
                release_year: data.year, 
                size: data.size, 
                price: data.price, 
                rating: data.rating, 
                image_url: data.image,
                is_android_app: android,
                is_ios_app: ios
             })
            .then(() => {
                    fetchData()
                    resolve("sucsess")
            })
            .catch(() => {
                reject("error")
            })
        })
    }

    const selectData = id => {
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
            .then(res => {
                //console.log(res)
                let data = res.data
                setSelectedDataMobile(
                    {
                        id: data.id, 
                        created: data.created_at,
                        updated: data.updated_at,
                        title: data.name,
                        description: data.description,
                        category: data.category,
                        size: data.size,
                        price: data.price,
                        rating: data.rating,
                        image: data.image_url,
                        year: data.release_year,
                        android: data.is_android_app,
                        ios: data.is_ios_app
                    }
                )
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const deleteData = id => {
			return new Promise( function (resolve, reject){
				axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
				.then(() => {
					fetchData()
					resolve("success")
				})
				.catch((err) => {
					alert(err.message)
					reject("error")
				})
			})
    }

		const updateData = (id, data) => {
			return new Promise( function (resolve, reject){
				axios.put(`http://backendexample.sanbercloud.com/api/mobile-apps/${id}`, {
                    name: data.title, 
                    description: data.description, 
                    category: data.category, 
                    release_year: data.year, 
                    size: data.size, 
                    price: data.price, 
                    rating: data.rating, 
                    image_url: data.image,
                    is_android_app: data.android,
                    is_ios_app: data.ios
                 })
						.then(() => {
							//console.log(res)
							fetchData()
							resolve("success")
						})
						.catch(() => {
							reject("error")
						})
			})
		}

    const action = {
        fetchData,
        addData,
        selectData,
        updateData,
        deleteData
    }

    return (
        <MobileContext.Provider value={{
            currentId,
            setCurrentId,
            dataMobile,
            setDataMobile,
            selectedDataMobile,
            setSelectedDataMobile,
            action
        }}>
            {props.children}
        </MobileContext.Provider>
    )
}