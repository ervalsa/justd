"use client"

import { Button, Form, Modal, Note, TextField } from "ui"

export default function ModalCustomStyleDemo() {
  return (
    <Modal>
      <Button intent="danger">Delete Project</Button>
      <Modal.Content classNames={{ content: "" }} role="alertdialog">
        <Modal.Header
          className="bg-secondary/80"
          title="Delete Project"
          description="This project’s gonna get wiped, including all its Deployments, Domains, Env Variables, Serverless Functions, and Settings."
        >
          <Note intent="danger" className="mt-2">
            No undo button here, so be sure!
          </Note>
        </Modal.Header>
        <Form onSubmit={() => {}}>
          <Modal.Body className="pt-6 space-y-4 border-t">
            <TextField
              isRequired
              autoFocus
              label="Enter the project name"
              type="text"
              placeholder="team/project-name"
            />
            <TextField isRequired label='To verify, type "delete my project" below' type="text" />
          </Modal.Body>
          <Modal.Footer>
            <Modal.Close>Cancel</Modal.Close>
            <Button intent="danger" type="submit">
              Delete Project
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Content>
    </Modal>
  )
}
