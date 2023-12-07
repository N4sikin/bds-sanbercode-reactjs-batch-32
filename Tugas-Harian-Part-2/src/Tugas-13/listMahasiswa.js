import { useContext, useEffect } from 'react'
// style
import '../assets/css/style.css';
import { DataMahasiswaContext } from '../context/mahasiswaContext';

const ListMahasiswa = () => {
    
	const { datamahasiswa, action } = useContext(DataMahasiswaContext)
				
	const { fetchData, selectData, deleteData } = action

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
		selectData(idMahasiswa)
	}

	const handleDelete = e => {
		let idMahasiswa = parseInt(e.target.value)
		deleteData(idMahasiswa)
	}

	return (
		<>
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
		</>
	)
    
}

export default ListMahasiswa;