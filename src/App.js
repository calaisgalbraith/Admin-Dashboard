import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import DefaultContainer from './components/DefaultContainer/DefaultContainer';
import AboutContainer from './components/AboutContainer/AboutContainer';
import Table from './components/Table/Table';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid shelterContainer">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<DefaultContainer />} />
              <Route path="/inventory" element={<Table type={'inventory'} title={'Inventory'}/>} />
              <Route path="/dogs" element={<Table type={'dogs'} title={'Dogs'}/>} />
              <Route path="/cats" element={<Table type={'cats'} title={'Cats'}/>} />
              <Route path="/other" element={<Table type={'other'} title={'Other'}/>} />
              <Route path="/employees" element={<Table type={'employees'} title={'Employees'}/>} />
              <Route path="/volunteers" element={<Table type={'volunteers'} title={'Volunteers'}/>} />
              <Route path="/fosters" element={<Table type={'fosters'} title={'Fosters'}/>} />
              <Route path="/about" element={<AboutContainer />} />
            </Routes>
          </main>
        </div>
    </div>
  );
}

export default App;
