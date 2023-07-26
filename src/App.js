import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavbarComp from "./components/layout/NavbarComp";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import AddUser from "./components/pages/AddUser";
import EditUser from "./components/pages/EditUser";
import View from "./components/pages/View";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComp />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/users/edit/:id" element={<EditUser />} />
            <Route path="/users/:id" element={<View />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavbarComp />
      <Home />
      <About />
      <Contact /> */}
    </div>
  );
}

export default App;
