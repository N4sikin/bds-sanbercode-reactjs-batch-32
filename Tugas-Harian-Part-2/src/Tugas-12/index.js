import {useState, useEffect} from 'react'
import axios from 'axios'
// style
import '../assets/css/style.css';

const TugasDuabelas = () => {

	const [currentId, setCurrentId] = useState(null)
	const [datamahasiswa, setDataMahasiswa] = useState([])

	const [inputNama, setInputNama] = useState("")
	const [inputMatkul, setInputMatkul] = useState("")
	const [inputNilai, setInputNilai] = useState(0)

	const [errorNilai, setErrorNilai] = useState("")
	const [loading, setLoading] = useState("")
	const [errorFeedback, setErrorFeedback] = useState("")

	const fetchData = async () => {
		const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
		//console.log(result)
		setDataMahasiswa(result.data.map(x=>{ return {id: x.id, nama: x.name, matkul: x.course, nilai: x.score}}))
	}

	useEffect(() => {
		fetchData()
	}, [])

	const indexNilai = a => {
		if (a >= 80) {
			return "A"
		} else if (a >= 70) {
			return "B"
		} else if (a >= 60) {
			return "C"
		} else if (a >= 50) {
			return "D"
		} else {
			return "E"
		}
	}

	const changeNama = e => {
		setInputNama(e.target.value)
	}

	const changeMatkul = e => {
		setInputMatkul(e.target.value)
	}

	const changeNilai = e => {
		if (String(Number(e.target.value)) === 'NaN') {
			setInputNilai(0)
		} else {
			if (Number(e.target.value) >= 0 && Number(e.target.value <= 100)) {
				setErrorNilai("")
			} else {
				setErrorNilai("Silahkan masukkan antara 0 - 100")
			}
			setInputNilai(Number(e.target.value))
		}
	}

	const handleEdit = e => {
		const idMahasiswa = e.target.value
		axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
			.then(res => {
				//console.log(res)
				let data = res.data
				setCurrentId(data.id)
				setInputNama(data.name)
				setInputMatkul(data.course)
				setInputNilai(data.score)
			})
		setErrorNilai("")
	}

	const handleDelete = e => {
		let idMahasiswa = parseInt(e.target.value)
		axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
			.then(() => {
				//console.log(res)
				// let tmpData = datamahasiswa.filter(filter => {return filter.id !== idMahasiswa})
				// setDataMahasiswa(tmpData)
				fetchData()
			})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setErrorFeedback("")
		if (inputNilai < 0 || inputNilai > 100) {
			setErrorNilai("Silahkan masukkan antara 0 - 100")
		}
		if (inputNilai >= 0 && inputNilai <= 100) {
			setLoading("Loading...")
			if (currentId === null) {
				//create mahassiswa baru
				axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name: inputNama, course: inputMatkul, score: inputNilai})
					.then(res => {
						//console.log(res)
						// let data = res.data
						// setDataMahasiswa([...datamahasiswa, {id: data.id, nama: data.name, matkul: data.course, nilai: data.score}])
						fetchData()
						setLoading("")
					})
			} else {
				//change data mahasiswa
				axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: inputNama, course: inputMatkul, score: inputNilai})
					.then(res => {
						//console.log(res)
						// let data = res.data
						// let tmp = datamahasiswa.find(search => search.id === currentId)
						// tmp.nama = data.name
						// tmp.matkul = data.course
						// tmp.nilai = data.score
						// //console.log(datamahasiswa)
						// setDataMahasiswa([...datamahasiswa])
						fetchData()
						setCurrentId(null)
						setLoading("")
					})
					.catch(() => {
						setErrorFeedback("Data tidak ditemukan")
						setCurrentId(null)
						setLoading("")
					})
			}
			setInputNama("")
			setInputMatkul("")
			setInputNilai(0)
		}
	}

	return (
		<div className='container'>
			<div className='header'>
				<h1>Daftar Nilai Mahasiswa</h1>
			</div>
			<table>
				<thead>
					<tr>
						<th>No</th>
						<th>Nama</th>
						<th>Mata Kuliah</th>
						<th>Nilai</th>
						<th>Index Nilai</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>
					{datamahasiswa.map((item, index) => {
						return (
							<tr key={item.id}>
								<td>{index + 1}</td>
								<td>{item.nama}</td>
								<td>{item.matkul}</td>
								<td>{item.nilai}</td>
								<td>{indexNilai(item.nilai)}</td>
								<td><button className='tableAction' value={item.id} onClick={handleEdit}>Edit</button><button className='tableAction' value={item.id} onClick={handleDelete}>Delete</button></td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className='header'>
				<h1>Form Nilai Mahasiswa</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='mb-1'>
					<div className='formInput'>
						<label className='formLabel'>Nama:</label>
						<input type='text' name='nama' value={inputNama} onChange={changeNama} />
					</div>
				</div>
				<div className='mb-1'>
					<div className='formInput'>
						<label className='formLabel'>Mata Kuliah:</label>
						<input type='text' name='matkul' value={inputMatkul} onChange={changeMatkul} />
					</div>
				</div>
					<div className='formInput'>
							<label className='formLabel'>Nilai:</label>
							<input type='text' name='nilai' value={inputNilai} onChange={changeNilai} />
					</div>
				<div className='rataKanan'>
						<small className='errorMessage'>{errorNilai}</small>
						<small>{loading}</small>
						<small className='errorFeedback'>{errorFeedback}</small>
					<input type='submit' value='submit' />
				</div>
			</form>
		</div>
	)
    
}

export default TugasDuabelas;