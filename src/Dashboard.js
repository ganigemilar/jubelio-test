import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import InfiniteScroll from "react-infinite-scroll-component";

import gambar from './logo.svg'

import ProductModal from './components/ProductModal'

class ProductCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={gambar} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.onEditClick()}>Edit</Button>
                </Card.Body>
            </Card>
        )
    }
}

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 3,
            items: Array.from({ length: 10 }),
            showEditProduct: false
        }
    }

    showEditProduct() {
        this.setState({ showEditProduct: true })
    }

    closeEditProduct(type, data) {
        debugger
        this.setState({ showEditProduct: false })
    }

    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 1 }))
            });
        }, 1500);
    };

    renderProduct(i) {
        return (<ProductCard onEditClick={() => this.showEditProduct()} />)
    }

    fetchData() {

    }

    render() {
        return (
            <>
                <ProductModal
                    title={'Edit Product'}
                    product={{ name: "PALAH" }}
                    show={this.state.showEditProduct}
                    onHide={(data) => this.closeEditProduct('HIDE', data)}
                    onClose={(data) => this.closeEditProduct('CLOSE', data)}
                    onSave={(data) => this.closeEditProduct('SAVE', data)}
                />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >

                    {this.state.items.map((i, index) => (
                        // <div key={index}>
                        //     div - #{index}
                        // </div>
                        <Container className="Product-list">
                            <Row>
                                <Col xs={6} md={4}>{this.renderProduct(0)}</Col>
                                <Col xs={6} md={4}>{this.renderProduct(0)}</Col>
                                <Col xs={6} md={4}>{this.renderProduct(0)}</Col>
                            </Row>
                        </Container>
                    ))}
                </InfiniteScroll>
            </>
        )
    }
}
export default ProductList