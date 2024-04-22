import './App.css';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <FetchData />
      <Footer/>
    </div>
  );
}

export default App;
