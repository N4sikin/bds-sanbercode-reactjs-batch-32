import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// style
import '../assets/css/style.css';
import { DataMahasiswaContext } from '../context/mahasiswaContext';
import { ThemeContext } from '../context/themeContext';


const ListMahasiswa = () => {

	let history = useHistory()
    
	const { datamahasiswa, 
		setInputNama,
		setInputMatkul,
		setInputNilai,
		errorFetch, 
		setErrorFeedback, 
		action } = useContext(DataMahasiswaContext)

	const { themeColor, setThemeColor } = useContext(ThemeContext)
				
	const { fetchData, deleteData } = action

	useEffect(() => {
    
		fetchData()

	}, []) // eslint-disable-line react-hooks/exhaustive-deps

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

	const handleEdit = e => {
		const idMahasiswa = e.target.value
		history.push(`/tugas14/editMahasiswa/${idMahasiswa}`)
		setErrorFeedback("")
	}

	const handleDelete = e => {
		let idMahasiswa = parseInt(e.target.value)
		deleteData(idMahasiswa)
	}

	const createNew = () => {
		history.push("/tugas14/createNew")
		setErrorFeedback("")
		setInputNama("")
		setInputMatkul("")
		setInputNilai(0)
	}

	return (
		<div className='container'>
			<div className='header'>
				<button className='btn-theme' onClick={() => {setThemeColor(themeColor === 'light' ? 'dark' : 'light')}}>Change Navbar to {themeColor === 'light' ? 'Dark' : 'Light'} Theme</button>
				<h1>Daftar Nilai Mahasiswa</h1>
			</div>
			<div className='content'>
			<button className='btn-addNew' onClick={createNew}>Buat Data Nilai Mahasiswa Baru</button>
			<table className='tbl-14'>
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
					{errorFetch !== "" ? (
						<tr>
							<td colSpan={6}><small className='errorMessage'>{errorFetch}</small></td>
						</tr>
					) : null}
				</tbody>
			</table>
			</div>
		</div>
	)
    
}

export default ListMahasiswa;