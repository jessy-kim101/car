import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/component/nav';
import Hero from '../src/component/Hero';
import Login from '../src/pages/auth/Login';
import Register from '../src/pages/auth/Register';
import ContactPage from '../src/pages/contactpage';
import AboutPage from '../src/pages/AboutPage';
 import CarPage from '../src/pages/CarPage';
 import Verify from '../src/pages/auth/VerifyUser';
import AdminDashboard from '../src/dashboard/Admin dashboard/AdminDashboard';
 //import Footer from '../src/component/footer/footer';
// import AdminDrawer from './dashboard/Admin dashboard/aside/AdminDrawer';
//import GetBookings from './dashboard/Admin dashboard/booking/GetBooking';
//import Profile from '../src/dashboard/Admin dashboard/Profile';
//import { useSelector } from 'react-redux';



function App() {
  return (
    <Router>
     
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
             <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
               <Route path="/cars" element={<CarPage />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/dashboard" element={<AdminDashboard />} />

            {/* <Route path="/cars" element={<CarPage />} />

           
           
            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </div>
    
    </Router>
  );
}

export default App;