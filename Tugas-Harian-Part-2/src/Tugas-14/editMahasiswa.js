import { useContext, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
// style
import '../assets/css/style.css';
import { DataMahasiswaContext } from '../context/mahasiswaContext';

const EditNilaiMahasiswa = () => {

	let history = useHistory()
	const { id } = useParams()
    
	const { inputNama,
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
		action } = useContext(DataMahasiswaContext)
				
	const { selectData, updateData } = action

	useEffect(() => {
		selectData(id)
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

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

	const handleSubmit = e => {
		e.preventDefault()
		setErrorFeedback("")
		if (inputNilai < 0 || inputNilai > 100) {
			setErrorNilai("Silahkan masukkan antara 0 - 100")
		}
		if (inputNilai >= 0 && inputNilai <= 100) {
			setLoading("Loading...")
			updateData(id).then(() => {
				history.push("/tugas14")
			})
		}
	}

	return (
		<div className='container'>
			<div className='header'>
				<h1>Form Nilai Mahasiswa</h1>
			</div>
			<div className='content'>
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
					</div>
					
					<div className='footerForm'>
						<Link className='btn-kembali' to="/tugas14">Kembali ke Tabel</Link>
						<input type='submit' value='submit' />
					</div>
				</form>
			</div>
		</div>
	)
    
}

export default EditNilaiMahasiswa;