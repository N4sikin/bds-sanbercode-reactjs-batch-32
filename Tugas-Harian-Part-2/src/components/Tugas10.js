//import logo
import logo from '../assets/img/logo.png';

// style
import '../assets/css/style.css';

const TugasSepuluh = (props) => {

  const dataList = [
		{ id: 1, label: "Belajar GIT & CLI" },
		{ id: 2, label: "Belajar HTML & CSS" },
		{ id: 3, label: "Belajar Javascript" },
		{ id: 4, label: "Belajar ReactJS Dasar" },
		{ id: 5, label: "Belajar ReactJS Advance" },
	]

	const List = (props) => {
		const tampilList = []; //simpan hasil looping ke dalam array ini

		if (props.data.length > 0) {
			// eslint-disable-next-line
			props.data.map(item => {
				tampilList.push(
					<div className='list' key={item.id}>
						<input type="checkbox" id={item.id} name={item.id} value={item.id} />
						<label>{item.label}</label>
					</div>
				);
			});
		}
		return tampilList	
	}

	return (
		<div className='container'>
		<div className='card'>
        <div className='card-header'>
          <img className='logo' src={logo} alt='' />
          <h1>THINGS TO DO</h1>
          <span>During bootcamp in sanbercode</span>
        </div>
          <List data={dataList} />
        <input className='button' type='submit' value="SEND"/>
      </div>
	  </div>
	);
}

export default TugasSepuluh;