import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

function AttackModal(props) {
  return (
    <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submit Attack
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formTeams">
                <Form.Label>Pwned Teams</Form.Label>
                <Form.Control type="teams" placeholder="Enter teams" />
                <Form.Text className="text-muted">
                Please enter comma-separated values.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTargets">
                <Form.Label>Targets</Form.Label>
                <Form.Control type="targets" placeholder="Enter targets" />
                <Form.Text className="text-muted">
                Please enter comma-separated values.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control type="category" placeholder="Category" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="description" placeholder="Description" />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" type="submit">Submit</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default AttackModal