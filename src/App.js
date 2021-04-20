import "./styles.css";
import Header from './components/header/Header';
import Nav from "./components/Nav/Nav";
import Home from "./components/content/Home"
import Footer from './components/content/Footer'
import Scroll from "./components/Scroll";
import Login from './components/account/login';
import Product from './components/content/Products/Products';
import Detail from './components/content/Products/Detail';
import {BrowserRouter, Route}from 'react-router-dom';
export default function App() {
  return (
<div>
<BrowserRouter>
    <Header/>
   <Nav/>
  <Scroll>
  <Route path='/' exact component={ Home }/>
  <Route path='/login'  component={ Login }/>
  <Route path='/Product/Phones' exacts component={ Product }/>
  <Route path='/Product/Detail/:id' exacts  component={ Detail }/>
   </Scroll>
  <Footer/>
</BrowserRouter>
</div>
  );
}
