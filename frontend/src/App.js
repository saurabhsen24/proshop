import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartScreen from './Components/screens/CartScreen';
import HomeScreen from './Components/screens/HomeScreen';
import LoginScreen from './Components/screens/LoginScreen';
import ProductScreen from './Components/screens/ProductScreen';
import ProfileScreen from './Components/screens/ProfileScreen';
import RegisterScreen from './Components/screens/RegisterScreen';
import ShippingScreen from './Components/screens/ShippingScreen';
import PaymentScreen from './Components/screens/PaymentScreen';
import PlaceOrderScreen from './Components/screens/PlaceOrderScreen';
import OrderScreen from './Components/screens/OrderScreen';
import UserListScreen from './Components/screens/UserListScreen';
import UserEditScreen from './Components/screens/UserEditScreen';
import ProductListScreen from './Components/screens/ProductListScreen';
import ProductEditScreen from './Components/screens/ProductEditScreen';
import OrderListScreen from './Components/screens/OrderListScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/productlist' exact component={ProductListScreen} />
          <Route path='/admin/productlist/:pageNumber' exact component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
          <Route exact path="/" component={HomeScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
