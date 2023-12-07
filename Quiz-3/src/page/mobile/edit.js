import { useContext, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { Row, Col, message } from 'antd';
import { MobileContext } from '../../context/mobileContext';
import '../../assets/css/style.css'

//import antd
import { Typography } from 'antd'

const BerhasilUpdate = () => {
	message.success('Data berhasil diubah');
  };

const EditData = () => {

    const { id } = useParams()
    const history = useHistory()
    const { Title } = Typography

    const { selectedDataMobile, setSelectedDataMobile, action } = useContext(MobileContext)
    const { selectData, updateData } = action

    useEffect(() => {
        selectData(id)
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name

        setSelectedDataMobile({ ...selectedDataMobile, [name]: value })
    }


    const handleSubmit = e => {
        e.preventDefault()
        // console.log(
        //     {
        //         name: e.target.title.value, 
        //         description: e.target.description.value, 
        //         category: e.target.category.value, 
        //         release_year: Number(e.target.year.value), 
        //         size: Number(e.target.size.value), 
        //         price: Number(e.target.price.value), 
        //         rating: Number(e.target.rating.value), 
        //         image_url: e.target.image.value,
        //         is_android_app: e.target.android.checked === true ? 1 : 0,
        //         is_ios_app: e.target.ios.checked === true ? 1 : 0
        //         }
        // )
        updateData(id, 
            {
                title: e.target.title.value, 
                description: e.target.description.value, 
                category: e.target.category.value, 
                year: Number(e.target.year.value), 
                size: Number(e.target.size.value), 
                price: Number(e.target.price.value), 
                rating: Number(e.target.rating.value), 
                image: e.target.image.value,
                android: e.target.android.checked === true ? 1 : 0,
                ios: e.target.ios.checked === true ? 1 : 0
            }
        ).then(() => {
            BerhasilUpdate()
            history.push("/mobile-list")
        })
    }

  return (
    <div className="row">
        <div className="section">
        <Title className='card-title' style={{marginBottom: '30px'}} level={2}>Edit Data</Title>
            <div className="card">
            <form onSubmit={handleSubmit}>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Title:</label></Col>
                    <Col span={20}><input onChange={handleChange} className='input' type='text' name='title' value={selectedDataMobile.title} required /></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Description:</label></Col>
                    <Col span={20}><textarea onChange={handleChange} className='input' name='description' value={selectedDataMobile.description} required></textarea></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Category:</label></Col>
                    <Col span={20}><input onChange={handleChange} className='input' type='text' name='category' value={selectedDataMobile.category} required /></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Year:</label></Col>
                    <Col span={20}><input onChange={handleChange} type='number' name='year' value={selectedDataMobile.year} required min='2007' max='2021' /></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Size:</label></Col>
                    <Col span={20}><input onChange={handleChange} type='number' name='size' value={selectedDataMobile.size} required min='0' /></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Price:</label></Col>
                    <Col span={20}><input onChange={handleChange} type='number' name='price' value={selectedDataMobile.price} required min='0' /></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Rating:</label></Col>
                    <Col span={20}><input onChange={handleChange} type='number' name='rating' value={selectedDataMobile.rating} required min='0' max='5' /></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Image:</label></Col>
                    <Col span={20}><input onChange={handleChange} className='input' type='text' name='image' value={selectedDataMobile.image} required /></Col>
                </Row>
                <Row className='mb-1'>
                    <Col span={4}><label className='formLabel'>Platform:</label></Col>
                    <Col span={20}>
                        <input type="checkbox" id="vehicle1" name="android" value="android" checked={selectedDataMobile.android === 1 ? true : false}  onChange={handleChange} />
                        <label> Android</label><br />
                        <input type="checkbox" id="vehicle2" name="ios" value="ios" checked={selectedDataMobile.ios === 1 ? true : false}  onChange={handleChange} />
                        <label> IOS</label>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={4}><Link className='btn-kembali' to='/mobile-list'>Kembali</Link><input type='submit' value='submit' /></Col>
                </Row>
			</form>
            </div>
        </div>
    </div>
  )
}

export default EditData