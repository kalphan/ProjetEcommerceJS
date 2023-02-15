// import SignIn from './Components/AuthForm/SignIn'
// importena ato ny component mis mb ho ita partout 

// partie auth
import Home from './Pages/Home/Home'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateHome from './Pages/PrivateHome/PrivateHome'
import PrivateRoute from './Components/PrivateRoute'
// partie ecommerce
import Navbar from './Components/Navbar/Navbar'
import FloatingCart from './Components/FloatingCart/FloatingCart'
import Home1 from './Pages/Home/Home1'
import Contact from './Pages/Contact/Contact'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import Products from './Pages/Products/Products'
import ProductShowCase from './Pages/ProductShowCase/ProductShowCase'

// partie back crud
import Sidebar from './Components/Sidebar/Sidebar'
import MainArea from './Components/MainArea/MainArea'
import ListNotes from './Components/ListNotes/ListNotes'

import DisplayNote from './Components/DisplayNote/DisplayNote'

import Todo from './Pages/Contact/Todo'


function App() {
  return (
    <>
    <AuthProvider>
      
      <Router>
      <Navbar />
     {/* <Sidebar />
      <Home1 />*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/loggedHome" component={PrivateHome} />
      
        {/*Integration ny component mb ho visible*/}
        <Route exact path="/Home1" component={Home1} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={ProductShowCase} />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />

        <Route exact path="/Todo" component={Todo} />

        <Route exact path="/Sidebar" component={Sidebar} />
        <Route exact path="/ListNotes" component={ListNotes} />
        <Route exact path="/edit" component={MainArea} />

        <Route exact path="/displayNote/:id" component={DisplayNote} />

      </Switch>

      </Router>

    </AuthProvider>
    </>
    
  );
}
export default App;
