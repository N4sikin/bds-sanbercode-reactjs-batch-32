import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'

import { Menu, Switch } from 'antd';

const Nav15 = () => {

	const { themeColor, setThemeColor, activeMenu, setActiveMenu } = useContext(ThemeContext)

	const changeTheme = () => {
		setThemeColor(themeColor === 'light' ? 'dark' : 'light')
	}

	return (
		<>
			<Menu onClick={(e) => {setActiveMenu(e.key)}} theme={themeColor} mode="horizontal" defaultSelectedKeys={[`${activeMenu}`]} className='menu-navbar'>
			<div className='thema'>
				<Menu.Item key='tema' disabled>
					<Switch
						checked={themeColor === 'dark'}
						onChange={changeTheme}
						checkedChildren="Dark"
						unCheckedChildren="Light"
					/>
				</Menu.Item>
				</div>
				<Menu.Item key="10"><Link to="/">Tugas 10</Link></Menu.Item>
				<Menu.Item key="11"><Link to="/tugas11">Tugas 11</Link></Menu.Item>
				<Menu.Item key="12"><Link to="/tugas12">Tugas 12</Link></Menu.Item>
				<Menu.Item key="13"><Link to="/tugas13">Tugas 13</Link></Menu.Item>
				<Menu.Item key="14"><Link to="/tugas14">Tugas 14</Link></Menu.Item>
				<Menu.Item key="15"><Link to="/tugas15">Tugas 15</Link></Menu.Item>
			</Menu>
		</>
	)
}

export default Nav15