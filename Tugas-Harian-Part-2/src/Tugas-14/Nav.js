import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'

const Nav14 = () => {

	const { themeColor } = useContext(ThemeContext)

	return (
		<div className={themeColor}>
			<div className='navbar'>
				<ul>
					<li>
						<Link to="/">Tugas 10</Link>
					</li>
					<li>
						<Link to="/tugas11">Tugas 11</Link>
					</li>
					<li>
						<Link to="/tugas12">Tugas 12</Link>
					</li>
					<li>
						<Link to="/tugas13">Tugas 13</Link>
					</li>
					<li>
						<Link to="/tugas14">Tugas 14</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav14