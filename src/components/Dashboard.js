import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import InfiniteScroll from "react-infinite-scroll-component";

import gambar from '../logo.svg'

// Component
import ProductModal from './ProductModal'
import DeleteNotifModal from './NotifModal';

// API
const productApi = require('../api/ProductAPI')

class ProductCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={gambar} />
                <Card.Body>
                    <Card.Title>{this.props.product.name}</Card.Title>
                    <Card.Text>
                        {this.props.product.description}
                    </Card.Text>
                    <Card.Text className='ProductCard-price'>
                        Rp. {this.props.product.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.onEditClick()}>Edit</Button>{' '}
                    <Button variant="danger" onClick={() => this.props.onDeleteClick()}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     page: 3,
        //     items: Array.from({ length: 10 }),
        //     showEditProduct: false
        // }

        this.state = {
            page: 1,
            limit: 6,
            showEditProduct: this.props.showEditProduct ?? false,
            showAddProduct: this.props.showAddProduct ?? false,
            currentEditProduct: null,
            currentAddProduct: null,
            products: []
        }

        this.fetchMoreData()

        this.editProductModalRef = React.createRef()
    }

    showEditProduct(product) {
        this.setState({ showEditProduct: true })

        this.editProductModalRef.current.fillForm(product)
    }

    closeEditProduct(type, data) {
        if (type == 'SAVE') {
            productApi.update(data)
                .then(() => {
                    this.setState({ showEditProduct: false })
                    this.props.onHideProductModal(type, 'ADD_PRODUCT', data)

                    this.fetchMoreData()

                    alert('Edit Product SUCESSS!')
                })
        } else {
            this.setState({ showEditProduct: false })
            this.props.onHideProductModal(type, 'ADD_PRODUCT', data)
        }
    }

    showAddProduct() {
        this.setState({ showAddProduct: true })
    }

    closeAddProduct(type, data) {
        if (type == 'SAVE') {
            productApi.create(data)
                .then(() => {
                    this.setState({ showAddProduct: false })
                    this.props.onHideProductModal(type, 'ADD_PRODUCT', data)

                    this.fetchMoreData()

                    alert('Add Product SUCESSS!')
                })
        } else {
            this.setState({ showAddProduct: false })
            this.props.onHideProductModal(type, 'ADD_PRODUCT', data)
        }
    }

    onDeleteProduct(product) {
        this.setState({
            showDeleteProduct: true,
            deleteNotifMessage: `Do you want to delete product "${product.name}" ?`,
            currentDeleteProduct: product
        })
    }

    onApproveDeleteProduct(product) {
        productApi.deleteById(product.id).then(res => {
            alert('Delete Product SUCCESS!')
            this.setState({ showDeleteProduct: false })
        })
    }

    onRejectDeleteProduct() {
        this.setState({ showDeleteProduct: false })
    }

    fetchMoreData = () => {
        productApi.getList(this.state.page, this.state.limit).then(res => {
            if (res.error) throw 'error'

            if (res.data) {
                const _products = []
                for (let i = 0; i < res.data.length; i += 3) {
                    _products.push(res.data.slice(i, i + 3))
                }

                this.setState({
                    page: this.state.page + 1,
                    products: this.state.products.concat(_products)
                })
            }
        })
    };

    renderProduct(product) {
        return (<ProductCard product={product}
            onEditClick={() => this.showEditProduct(product)}
            onDeleteClick={() => this.onDeleteProduct(product)}
        />)
    }

    render() {
        return (
            <>
                <DeleteNotifModal
                    show={this.state.showDeleteProduct}
                    body={this.state.deleteNotifMessage}
                    onYesClick={() => this.onApproveDeleteProduct(this.state.currentDeleteProduct)}
                    onNoClick={() => this.onRejectDeleteProduct()}
                />
                <ProductModal
                    ref={this.editProductModalRef}
                    title={'Edit Product'}
                    show={this.props.showEditProduct ?? this.state.showEditProduct}
                    product={this.state.currentEditProduct}
                    onHide={(data) => this.closeEditProduct('HIDE', data)}
                    onClose={(data) => this.closeEditProduct('CLOSE', data)}
                    onSave={(data) => this.closeEditProduct('SAVE', data)}
                />
                <ProductModal
                    title={'Add Product'}
                    show={this.props.showAddProduct || this.state.showAddProduct}
                    onHide={(data) => this.closeAddProduct('HIDE', data)}
                    onClose={(data) => this.closeAddProduct('CLOSE', data)}
                    onSave={(data) => this.closeAddProduct('SAVE', data)}
                />
                <InfiniteScroll
                    dataLength={this.state.products.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <Container className="Product-list">
                        {this.state.products.map((prods, i) => (
                            <Row>
                                {prods.map((prod, j) => (
                                    <Col xs={6} md={4}>{this.renderProduct(prod)}</Col>
                                ))}
                            </Row>
                        ))}
                    </Container>
                </InfiniteScroll>
            </>
        )
    }
}
export default ProductList