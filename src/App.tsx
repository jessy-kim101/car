import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/component/nav';
import Hero from '../src/component/Hero';
import Login from '../src/component/nav';
//import RegisterPage from './pages/registerPage';
//import LoginPage from './pages/loginPage';
//import ContactPage from './pages/contactPage';

// import CarPage from '../src/pages/CarPage';
// import Verify from '../src/component/auth/Verify';
// import Profile from '../src/component/profile';



function App() {
  return (
    <Router>
     
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
             <Route path="/login" element={<Login />} />
            {/* <Route path="/cars" element={<CarPage />} />

           
           
            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </div>
    
    </Router>
  );
}

export default App;