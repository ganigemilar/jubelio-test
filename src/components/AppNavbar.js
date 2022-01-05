import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import ProductList from "./Dashboard";

class AppNavbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAddProduct: false
        }
    }

    onClickAddProduct() {
        console.log('open add product')
        this.setState({ showAddProduct: true })
    }

    onHideProductModal(type, task, data) {
        debugger
        this.setState({ showAddProduct: false })
    }

    render() {
        return (
            <>
                <Navbar fixed="top" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={() => this.onClickAddProduct()}>Add Product</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Container className="Product-content">
                    <ProductList showAddProduct={this.state.showAddProduct} onHideProductModal={(type, task, data) => this.onHideProductModal(type, task, data)}/>
                </Container>
            </>
        )
    }
}

export default AppNavbar