import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MenuContext } from '../context/menuContext'
import logo from '../assets/img/logo.png'

import { Menu, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

const Nav = () => {
	const history = useHistory()

	const { activeMenu, setActiveMenu} = useContext(MenuContext)

	const handleSubmit = e => {
		e.preventDefault()
		const search = e.target.search.value
		if (search !== '') {
			history.push(`/search/${search}`)
			setActiveMenu(0)
		} else {
			history.push("/")
			setActiveMenu(1)
		}
	}

	return (
			<div className='topnav'>
				<Link to="/"><img src={logo} height="40" alt='' /></Link>
				<Menu onClick={(e) => {setActiveMenu(e.key)}} theme='light' mode="horizontal" selectedKeys={[`${activeMenu}`]}>
					<Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
					<Menu.Item key="2"><Link to="/mobile-list">Mobile List</Link></Menu.Item>
					<Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
				</Menu>
				<form onSubmit={handleSubmit}>
					<Input placeholder="Cari Judul" name='search' />
					<Button style={{marginLeft: '10px', marginRight: '10px'}} type="primary" icon={<SearchOutlined />} htmlType="submit" />
				</form>
			</div>
	)
}

export default Nav