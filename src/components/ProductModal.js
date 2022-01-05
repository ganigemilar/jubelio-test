import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            id: this.props.product?.id ?? null,
            name: this.props.product?.name ?? "",
            sku: this.props.product?.sku ?? "",
            image: this.props.product?.image ?? "no_product.png",
            price: this.props.product?.price ?? 0,
            description: this.props.product?.description ?? ""
        }
    }

    fillForm(product) {
        this.setState({
            id: product?.id ?? null,
            name: product?.name ?? "",
            sku: product?.sku ?? "",
            image: product?.image ?? "no_product.png",
            price: product?.price ?? 0,
            description: product?.description ?? ""
        })
    }

    render() {
        return (
            <Modal
                {...this.props}
                show={this.props.show} onHide={() => this.props.onHide(this.state)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" placeholder="" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>SKU</Form.Label>
                            <Form.Control type="text" placeholder="" value={this.state.sku} onChange={(e) => this.setState({ sku: e.target.value })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.onClose(this.state)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.props.onSave(this.state)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ProductModal