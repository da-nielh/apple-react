// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Alart from './Components/Sections/Alart';
import First from './Components/Sections/First';
import Second from './Components/Sections/Second';
import Third from './Components/Sections/Third';
import Fourth from './Components/Sections/Fourth';
import Fifth from './Components/Sections/Fifth';
import Sixth from './Components/Sections/Sixth';
import Footer from './Components/Footer';
import './common/css/bootstrap.css'
import './common/css/styles.css'
import Carousel from './Components/Sections/Carousels'

function App() {
  return (
    <div>
      <Header />
      <Alart />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
