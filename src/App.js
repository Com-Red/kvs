import './App.css';
import Menu from './components/menu/menu';
import {Routes, Route, Link} from 'react-router-dom';
import Page1 from './components/page/page1';
import Page2 from './components/page/page2';
import Page3 from './components/page/page3';
import Test from './components/page/test';
import Footer from './components/page/footer';
import { Home } from './components/page/home';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Page2' element={<Page2/>}/>
        <Route path='Page3' element={<Page3/>}/>
        <Route path='Test' element={<Test/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
