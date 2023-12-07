import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { MobileContext } from '../../context/mobileContext';
import { Typography, Button, Table, Space, Tag, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const BerhasilHapus = () => {
	message.success('Data terhapus');
  };


const MobileList = () => {
	const { Title } = Typography

	let history = useHistory()
    
	const { dataMobile, action } = useContext(MobileContext)
				
	const { fetchData, deleteData } = action

	useEffect(() => {
    
		fetchData()

	}, []) // eslint-disable-line react-hooks/exhaustive-deps

    const indexNilai = a => {
		if (a === 1) {
			return (
            <Tag color='green' key={a}>
                True
            </Tag>
            )
		} else {
			return (
            <Tag color='volcano' key={a}>
                False
            </Tag>
            )
		}
	}

    const convertSize = (a) => {
        if (a > 1000) {
            return `${a / 1000} GB`
        } else {
            return `${a} MB`
        }
    }

	const handleEdit = e => {
		history.push(`/mobile-form/edit/${e}`)
	}

	const handleDelete = e => {
		deleteData(e).then(() => {
			BerhasilHapus()
		})
	}

	const createNew = () => {
		history.push("/mobile-form")
	}

	const columns = [
		{
			title: 'No',
			key: 'no',
			render: (text, record, index) => `${index + 1}`
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title'
		},
		{
			title: 'Deskripsi',
			dataIndex: 'description',
			key: 'description'
		},
        {
			title: 'Category',
			dataIndex: 'category',
			key: 'category'
		},
        {
			title: 'Image',
			dataIndex: 'image',
			key: 'image',
            render: (text, record, index) => (<img src={record.image} alt='' className='img-list' />)
		},
		{
			title: 'Size',
			dataIndex: 'size',
			key: 'size',
            render: (text, record, index) => convertSize(record.size)
		},
        {
			title: 'Year',
			dataIndex: 'year',
			key: 'year'
		},
        {
			title: 'Rating',
			dataIndex: 'rating',
			key: 'rating'
		},
        {
			title: 'Android App',
			dataIndex: 'android',
			key: 'android',
			render: (text, record, index) => indexNilai(record.android)
		},
        {
			title: 'IOS App',
			dataIndex: 'ios',
			key: 'ios',
			render: (text, record, index) => indexNilai(record.ios)
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
        <div className="row">
            <div className="section">
                <div className="card">
                    <Title className='card-title' style={{marginBottom: '30px'}} level={2}>Daftar Mobile List</Title>
                    <Button style={{marginBottom: '10px'}} type="primary" onClick={createNew}>Buat Data Baru</Button>
                    <Table columns={columns} dataSource={dataMobile}/>
                </div>
            </div>
        </div>
	)
    
}

export default MobileList;