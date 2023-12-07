import { 
    BrowserRouter as Router,
    Switch,
    Route
 } from 'react-router-dom'

//  import Nav14 from './Nav'
 import Nav15 from '../Tugas-15/Nav'

 // import halaman
 import TugasEmpatBelas from './Tugas14'
 import CreateNewNilaiMahasiswa from './formMahasiswa'
 import EditNilaiMahasiswa from './editMahasiswa'
 import TugasLimaBelas from '../Tugas-15/Tugas15'
 import CreateNewNilaiMahasiswa15 from '../Tugas-15/formMahasiswa'
 import EditNilaiMahasiswa15 from '../Tugas-15/editMahasiswa'
 import TugasSepuluh from '../components/Tugas10'
 import TugasSebelas from '../Tugas-11'
 import TugasDuabelas from '../Tugas-12'
 import TugasTigabelas from '../Tugas-13'
import { ThemeProvider } from '../context/themeContext'
import { DataMahasiswaProvider } from '../context/mahasiswaContext'

 const Routes = () => {
     return (
        <Router>
					<ThemeProvider>
						<Nav15 />
						<Switch>
							<Route exact path="/" component={TugasSepuluh} />
							<Route exact path="/tugas11" component={TugasSebelas} />
							<Route exact path="/tugas12" component={TugasDuabelas} />
							<DataMahasiswaProvider>
								<Route exact path="/tugas13" component={TugasTigabelas} />
								<Route exact path="/tugas14" component={TugasEmpatBelas} />
								<Route exact path="/tugas14/createNew" component={CreateNewNilaiMahasiswa} />
								<Route exact path="/tugas14/editMahasiswa/:id" component={EditNilaiMahasiswa} />
								<Route exact path="/tugas15" component={TugasLimaBelas} />
								<Route exact path="/tugas15/createNew" component={CreateNewNilaiMahasiswa15} />
								<Route exact path="/tugas15/editMahasiswa/:id" component={EditNilaiMahasiswa15} />
							</DataMahasiswaProvider>
						</Switch>
					</ThemeProvider>
        </Router>
     )
 }

 export default Routes