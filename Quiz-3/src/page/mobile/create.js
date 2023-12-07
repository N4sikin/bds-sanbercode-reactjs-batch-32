import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Checkbox, Row, Col, message } from 'antd';
import { MobileContext } from '../../context/mobileContext';
//import antd
import { Typography } from 'antd'

const Berhasil = () => {
	message.success('Data berhasil ditambah');
  };

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} harus diisi!',
  types: {
    number: 'isikan ${label} dengan benar!',
  },
  number: {
    range: 'silahkan input ${label} antara ${min} dan ${max}',
  },
}
/* eslint-enable no-template-curly-in-string */

const CreateNew = () => {
    const { Title } = Typography

    const { action } = useContext(MobileContext)
    const { addData } = action

    const history = useHistory()
    const onFinish = (values) => {
        //console.log(values)
        addData(values).then(() => {
            Berhasil()
            history.push("/mobile-list")
        })
    }

    const kembali = () => {
        history.push("/mobile-list")
    }

  return (
    <div className="row">
        <div className="section">
        <Title className='card-title' style={{marginBottom: '30px'}} level={2}>Daftar Baru</Title>
            <div className="card">
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={{
                    'year': 2007,
                    'android': 'checked',
                    'ios': 'checked'
                }}>
                    <Form.Item
                        name='title'
                        label="Title"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name='description'
                        label="Description" 
                        rules={[
                        {
                            required: true,
                        },
                        ]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name='category'
                        label="Category"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='year'
                        label="Year"
                        rules={[
                        {
                            type: 'number',
                            min: 2007,
                            max: 2021,
                            required: true,
                        },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name='size'
                        label="Size"
                        rules={[
                        {
                            type: 'number',
                            min: 0,
                            required: true,
                        },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name='price'
                        label="Price"
                        rules={[
                        {
                            type: 'number',
                            min: 0,
                            required: true,
                        },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name='rating'
                        label="Rating"
                        rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 5,
                            required: true,
                        },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name='image'
                        label="Image"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name="platform" 
                        label="Platform"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Checkbox.Group>
                        <Row>
                            <Col span={16}>
                            <Checkbox
                                value="android"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                Android
                            </Checkbox>
                            </Col>
                            <Col span={16}>
                            <Checkbox
                                value="ios"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                IOS
                            </Checkbox>
                            </Col>
                        </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                        <Button htmlType="button" style={{marginRight: '10px'}} onClick={kembali}>
                            Kembali
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default CreateNew