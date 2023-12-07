import { 
    BrowserRouter as Router,
    Switch,
    Route
 } from 'react-router-dom'
 import Nav from './Nav'

 //import context
 import { MenuProvider } from '../context/menuContext'
 import { MobileProvider } from '../context/mobileContext'

 // import halaman
import Home from '../page/home'
import About from '../page/about'
import MobileList from '../page/mobile/list'
import CreateNew from '../page/mobile/create'
import EditData from '../page/mobile/edit'
import SearchList from '../page/mobile/searchList'

 const Routes = () => {
     return (
        <Router>
            <MenuProvider>
            <Nav />
            <Switch>
                <MobileProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/mobile-list" component={MobileList} />
                    <Route exact path="/mobile-form" component={CreateNew} />
                    <Route exact path="/mobile-form/edit/:id" component={EditData} />
                    <Route exact path="/search/:valueOfSearch" component={SearchList} />
                    <Route exact path="/about" component={About} />
                </MobileProvider>
            </Switch>
            <footer>
                <h5>&copy; Quiz 3 ReactJS Sanbercode</h5>
            </footer>
            </MenuProvider>
        </Router>
     )
 }

 export default Routes