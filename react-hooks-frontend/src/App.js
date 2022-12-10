import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooteComponent from './components/FooteComponent';
import HeaderComponenet from './components/HeaderComponenet';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponenet />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
          </Routes>
        </div>
        <FooteComponent />
      </Router>
    </div>
  );
}

export default App;
