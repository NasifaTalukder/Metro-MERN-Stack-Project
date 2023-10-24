import React from 'react'
import App from '../App';
import Shop from "../components/Shop"
import {CheckOut} from '../components/CheckOut';
import {Account} from '../components/Account';
import {Error} from "../components/Error"
import { Contact } from './Contact';
import { Cart } from './Cart';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";


const RouterPage = () => {
  return (
    <Router>
 
 <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Shop' element={<Shop/>}/>
    <Route path='/CheckOut' element={<CheckOut/>}/>
    <Route path='/My Account' element={<Account/>}/>
    <Route path='/404' element={<Error/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Cart' element={<Cart/>}/>

 </Routes>

    </Router>
    
  )
}

export default RouterPage
