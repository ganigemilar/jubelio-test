import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.product?.name ?? "",
            sku: this.props.product?.sku ?? "",
            price: this.props.product?.price ?? 0,
            description: this.props.product?.description ?? ""
        }
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
                    <Modal.Title>{this.props.title}</Modal.Title>
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