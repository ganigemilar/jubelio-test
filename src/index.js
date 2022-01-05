import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Navbar, Nav, Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import ProductList from './components/Dashboard'
import AppNavbar from './components/AppNavbar'

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar fixed="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick={onClickAddProduct}>Add Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar> */}
    {/* <App /> */}
    {/* <Container className="Product-content">
      <ProductList showAddProduct={showAddProduct}/>
    </Container> */}

    <AppNavbar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
