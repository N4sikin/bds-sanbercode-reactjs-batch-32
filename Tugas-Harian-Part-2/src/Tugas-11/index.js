import {useState} from 'react'
// style
import '../assets/css/style.css';

const TugasSebelas = () => {
	//inisial data
	var daftarBuah = [
			{nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
			{nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
			{nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
			{nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
			{nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
		]

	const [listBuah, setListBuah] = useState(daftarBuah)
	const [currentIndex, setCurrentIndex] = useState(-1)

	const [inputNama, setInputNama] = useState("")
	const [inputHarga, setInputHarga] = useState(0)
	const [inputBerat, setInputBerat] = useState(0)

	const [errorNama, setErrorNama] = useState("")
	const [errorHarga, setErrorHarga] = useState("")
	const [errorBerat, setErrorBerat] = useState("")

	const changeNama = e => {
		setInputNama(e.target.value)
		if (e.target.value.trim() === "") {
			setErrorNama("Nama tidak boleh kosong")
		} else {
			setErrorNama("")
		}
	}

	const changeHarga = e => {
		if (String(Number(e.target.value)) === 'NaN') {
			setErrorHarga("Total harga harus lebih besar dari 0")
			setInputHarga(0)
		} else {
			if (Number(e.target.value) > 0) {
				setErrorHarga("")
			} else {
				setErrorHarga("Total harga harus lebih besar dari 0")
			}
			setInputHarga(Number(e.target.value))
		}
	}

	const changeBerat = e => {
		if (String(Number(e.target.value)) === 'NaN') {
			setErrorBerat("Berat kurang dari 2000 gram")
			setInputBerat(0)
		} else {
			if (Number(e.target.value) < 2000) {
				setErrorBerat("Berat kurang dari 2000 gram")
			} else {
				setErrorBerat("")
			}
			setInputBerat(Number(e.target.value))
		}
	}

	const handleEdit = e => {
		const index = parseInt(e.target.value)
		const selectedItem = listBuah[index]
		setInputNama(selectedItem.nama)
		setInputHarga(selectedItem.hargaTotal)
		setInputBerat(selectedItem.beratTotal)
		setCurrentIndex(index)
		setErrorNama("")
		setErrorHarga("")
		setErrorBerat("")
	}

	const handleDelete = e => {
		const index = parseInt(e.target.value)
		const selectedItem = listBuah[index]
		const newData = listBuah.filter(filter => (filter.nama !== selectedItem.nama && filter.hargaTotal !== selectedItem.hargaTotal && filter.beratTotal !== selectedItem.beratTotal))
		//console.log(newData)
		setListBuah(newData)
		if (index < currentIndex && currentIndex !== -1) {
			setCurrentIndex(currentIndex - 1)
		} else if (index === currentIndex && currentIndex !== -1) {
			setCurrentIndex(-1)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		let tmpData = listBuah
		if (inputNama.trim() === "") {
			setErrorNama("Nama tidak boleh kosong")
		}
		if (inputHarga <= 0) {
			setErrorHarga("Total harga harus lebih besar dari 0")
		}
		if (inputBerat < 2000) {
			setErrorBerat("Berat kurang dari 2000 gram")
		}
		if (inputNama.trim() !== '' && inputHarga > 0 && inputBerat >= 2000) {
			if (currentIndex === -1) {
				tmpData = [...listBuah, {nama: inputNama, hargaTotal: inputHarga, beratTotal: inputBerat}]
				//console.log(tmpData)
			} else {
				tmpData[currentIndex] = {nama: inputNama, hargaTotal: inputHarga, beratTotal: inputBerat}
				//console.log(tmpData)
			}
			setListBuah(tmpData)
			setInputNama("")
			setInputHarga(0)
			setInputBerat(0)
			setCurrentIndex(-1)
		}
	}

	return (
		<div className='container'>
			<div className='header'>
				<h1>Daftar Harga Buah</h1>
			</div>
			<table>
				<thead>
					<tr>
						<th>No</th>
						<th>Nama</th>
						<th>Harga Total</th>
						<th>Berat Total</th>
						<th>Harga per kg</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>
					{listBuah.map((item, index) => {
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.nama}</td>
								<td>{item.hargaTotal}</td>
								<td>{parseFloat(item.beratTotal / 1000)} Kg</td>
								<td>{parseFloat(item.hargaTotal / (item.beratTotal / 1000))}</td>
								<td><button className='tableAction' value={index} onClick={handleEdit}>Edit</button><button className='tableAction' value={index} onClick={handleDelete}>Delete</button></td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className='header'>
				<h1>Form Daftar Harga Buah</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='mb-1'>
					<div className='formInput'>
						<label className='formLabel'>Nama:</label>
						<input type='text' name='nama' value={inputNama} onChange={changeNama} />
					</div>
					<div className='rataKanan'>
							<small className='errorMessage'>{errorNama}</small>
					</div>
				</div>
				<div className='mb-1'>
					<div className='formInput'>
						<label className='formLabel'>Harga Total:</label>
						<input type='text' name='nama' value={inputHarga} onChange={changeHarga} />
					</div>
					<div className='rataKanan'>
							<small className='errorMessage'>{errorHarga}</small>
					</div>
				</div>
					<div className='formInput'>
							<label className='formLabel'>Berat Total(dalam gram):</label>
							<input type='text' name='nama' value={inputBerat} onChange={changeBerat} />
					</div>
				<div className='rataKanan'>
						<small className='errorMessage'>{errorBerat}</small>
					<input type='submit' value='submit' />
				</div>
			</form>
		</div>
	)
    
}

export default TugasSebelas;