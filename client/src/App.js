import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/App.scss"

import Layout from './Layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Login from "./components/Form/Login"
import Register from "./components/Form/Register"
import Account from "./components/Account"
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />}>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
