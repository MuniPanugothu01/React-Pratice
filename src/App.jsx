import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";
import Register from "./Register";
import State from "./UseState/state";
import UseState from "./Pratice_Scratch/UseState";

function App() {
  return (
    <>
      {/* <State /> */}

    <UseState/>

    </>















    // <AuthProvider>
    //   <Router>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route
    //         path="/about-us"
    //         element={<ProtectedRoute><AboutUs /></ProtectedRoute>}
    //       />
    //       <Route
    //         path="/contact-us"
    //         element={<ProtectedRoute><ContactUs /></ProtectedRoute>}
    //       />
    //     </Routes>
    //   </Router>
    // </AuthProvider>
  );
}

// Component to handle protected routes
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

export default App;
