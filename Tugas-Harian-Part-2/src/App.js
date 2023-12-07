// style
import './App.css';
import "antd/dist/antd.css";
// import "antd/dist/antd.less";

// import component
import Routes from './Tugas-14/Routes';

//inport components
// import TugasSepuluh from './components/Tugas10';
// import TugasSebelas from './Tugas-11';
// import TugasDuabelas from './Tugas-12';
// import TugasTigabelas from './Tugas-13';

// const App = () => {

//   const dataList = [
// 		{ id: 1, label: "Belajar GIT & CLI" },
// 		{ id: 2, label: "Belajar HTML & CSS" },
// 		{ id: 3, label: "Belajar Javascript" },
// 		{ id: 4, label: "Belajar ReactJS Dasar" },
// 		{ id: 5, label: "Belajar ReactJS Advance" },
// 	]

//   return (
//     <div className="App">
//       <TugasSepuluh data={dataList} />
//       <TugasSebelas />
//       <TugasDuabelas />
//       <TugasTigabelas />
//     </div>
//   );
// }

const App = () => {
  return (
    <Routes />
  )
}

export default App;
