import React from "react";
import { Modal, Button } from 'react-bootstrap'

class DeleteNotifModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={() => this.props.onHide()}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => this.props.onYesClick?.()}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={() => this.props.onNoClick?.()}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default DeleteNotifModal