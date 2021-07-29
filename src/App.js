import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './css/Navbar.css';
import About from './Pages/About/About';
import Servisec from './Pages/Servisec/Servisec';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';


function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="App">
      <div className="container">
        <Navbar color="faded" light >
            <NavbarBrand href="/" className="mr-auto"><img src="https://osten-co.uz/images/osten.svg" alt="" className="ostinLogo" /></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to="/">ГЛАВНАЯ</Link>
                </NavItem>
                <NavItem>
                  <Link to="/About">О НАС</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Servisec">УСЛУГИ</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Contact">КОНТАКТИ</Link>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/akromov14">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Servisec">
              <Servisec />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
