import { createContext, useState } from "react";
import axios from 'axios'

export const DataMahasiswaContext = createContext()

export const DataMahasiswaProvider = props => {

	const [currentId, setCurrentId] = useState(null)
	const [datamahasiswa, setDataMahasiswa] = useState([])

	const [inputNama, setInputNama] = useState("")
	const [inputMatkul, setInputMatkul] = useState("")
	const [inputNilai, setInputNilai] = useState(0)

	const [errorNilai, setErrorNilai] = useState("")
	const [loading, setLoading] = useState("")
	const [errorFeedback, setErrorFeedback] = useState("")
	const [errorFetch, setErrorFetch] = useState("")

    const fetchData = async () => {
			setErrorFetch("")
			try {
				const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
        setDataMahasiswa(result.data.map(x=>{ return {id: x.id, nama: x.name, matkul: x.course, nilai: x.score, key: x.id}}))
			} catch(err) {
				setErrorFetch("Error gagal menampilkan data")
			}
        
    }

    const selectData = idMahasiswa => {
			setInputNama("Loading...")
			setInputMatkul("Loading...")
			setInputNilai("Loading...")
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
					.then(res => {
						//console.log(res)
						let data = res.data
						setCurrentId(data.id)
						setInputNama(data.name)
						setInputMatkul(data.course)
						setInputNilai(data.score)
					})
					.catch((err) => {
						alert(err.message)
						setInputNama("")
						setInputMatkul("")
						setInputNilai("")
					})
				setErrorNilai("")
    }

    const addData = () => {
			return new Promise( function (resolve, reject){
				axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name: inputNama, course: inputMatkul, score: inputNilai})
				.then(() => {
						fetchData()
						setLoading("")
						resolve("sucsess")
						setInputNama("")
						setInputMatkul("")
						setInputNilai(0)
				})
				.catch(() => {
					setLoading("")
					setErrorFeedback("Gagal menambahkan data")
					reject("error")
				})
			})
    }

    const deleteData = idMahasiswa => {
			return new Promise( function (resolve, reject){
				axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
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

		const updateData = idMahasiswa => {
			return new Promise( function (resolve, reject){
				axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`, {name: inputNama, course: inputMatkul, score: inputNilai})
						.then(() => {
							//console.log(res)
							fetchData()
							setCurrentId(null)
							setLoading("")
							resolve("success")			
							setInputNama("")
							setInputMatkul("")
							setInputNilai(0)
						})
						.catch(() => {
							setErrorFeedback("Data tidak ditemukan")
							setCurrentId(null)
							setLoading("")
							reject("error")
						})
			})
		}

    const action = {
        fetchData,
        selectData,
				addData,
        deleteData,
				updateData
    }

    return (
        <DataMahasiswaContext.Provider value={{
            currentId,
            setCurrentId,
            datamahasiswa,
            setDataMahasiswa,
            inputNama,
            setInputNama,
            inputMatkul,
            setInputMatkul,
            inputNilai,
            setInputNilai,
            errorNilai,
            setErrorNilai,
            loading,
            setLoading,
            errorFeedback,
            setErrorFeedback,
						errorFetch,
						setErrorFetch,
            action
        }}>
            {props.children}
        </DataMahasiswaContext.Provider>
    )
}