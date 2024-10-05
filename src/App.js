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
              <Route path="/inventory" element={<Table type={'inventory'}/>} />
              <Route path="/dogs" element={<Table type={'dogs'}/>} />
              <Route path="/cats" element={<Table type={'cats'}/>} />
              <Route path="/other" element={<Table type={'other'}/>} />
              <Route path="/employees" element={<Table type={'employees'}/>} />
              <Route path="/volunteers" element={<Table type={'volunteers'}/>} />
              <Route path="/about" element={<AboutContainer />} />
            </Routes>
          </main>
        </div>
    </div>
  );
}

export default App;
