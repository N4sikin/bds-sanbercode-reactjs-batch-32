import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// style
import '../assets/css/style.css';
import { DataMahasiswaContext } from '../context/mahasiswaContext'
import { Layout, Typography, Button, Table, Space, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const BerhasilHapus = () => {
	message.success('Data terhapus');
  };


const ListMahasiswa = () => {

	const { Content } = Layout
	const { Title } = Typography

	let history = useHistory()
    
	const { datamahasiswa, 
		setInputNama,
		setInputMatkul,
		setInputNilai,
		setErrorFeedback, 
		action } = useContext(DataMahasiswaContext)
				
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
		history.push(`/tugas15/editMahasiswa/${e}`)
		setErrorFeedback("")
	}

	const handleDelete = e => {
		deleteData(e).then(() => {
			BerhasilHapus()
		})
	}

	const createNew = () => {
		history.push("/tugas15/createNew")
		setErrorFeedback("")
		setInputNama("")
		setInputMatkul("")
		setInputNilai(0)
	}

	const columns = [
		{
			title: 'No',
			key: 'no',
			render: (text, record, index) => `${index + 1}`
		},
		{
			title: 'Nama',
			dataIndex: 'nama',
			key: 'nama'
		},
		{
			title: 'mata Kuliah',
			dataIndex: 'matkul',
			key: 'matkul'
		},
		{
			title: 'Nilai',
			dataIndex: 'nilai',
			key: 'nilai'
		},
		{
			title: 'Index Nilai',
			dataIndex: 'indexNilai',
			key: 'indexNilai',
			render: (text, record, index) => indexNilai(record.nilai)
		},
		{
			title: 'Aksi',
			key: 'aksi',
			render: (record) => (
				<Space size="small">
					<Button className="btn-edit" icon={<EditOutlined />} onClick={() => handleEdit(record.id)}/>
					<Button type="primary" icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} danger/>
				</Space>
			)
		}
	]

	return (
		<Layout>
			<Content className="site-layout" style={{ padding: '0 50px', margin: '64px auto', width: '60%' }}>
			<div className="site-layout-background" style={{ padding: 24, minHeight: '80vh' }}>
				<Title style={{marginBottom: '30px'}} level={2}>Daftar Nilai Mahasiswa</Title>
				<Button style={{marginBottom: '10px'}} type="primary" onClick={createNew}>Buat Data Nilai Mahasiswa Baru</Button>
				<Table columns={columns} dataSource={datamahasiswa}/>
			</div>
			</Content>
		</Layout>
	)
    
}

export default ListMahasiswa;