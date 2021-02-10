import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomeScreen from './Components/screens/HomeScreen';
import ProductScreen from './Components/screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;