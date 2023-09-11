
import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
     
     <div className='container'>
      <Routes>
        <Route exact path="/" Component={ListEmployeeComponent}></Route>
        <Route path='/employee' Component={ListEmployeeComponent}></Route>
        <Route path='/add_Employee' Component={AddEmployeeComponent}></Route>
        <Route path='/edit-employee/:id'Component={AddEmployeeComponent}></Route>
      </Routes>
      </div>
     

      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
