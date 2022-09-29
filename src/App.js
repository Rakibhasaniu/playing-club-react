import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Items from './Components/Items/Items';
import Question from './Components/Question/Question';
import Footer from './Components/Footer/Footer';






function App() {
  
  return (
    <div>
      <div className='home'>
      
      <Items></Items>
      <Question></Question>
      <Footer></Footer>
     
      </div>
      
    </div>
  );
}

export default App;
