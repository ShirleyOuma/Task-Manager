import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';



class TaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeItem: this.props.activeItem
    };
  }
  // Check whether checkbox is checked or not
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem })
  };


  render() {
    const { toggle, onSave } = this.props;
    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Task Item </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            value={this.state.activeItem.title}
                            onChange={this.handleChange}
                            placeholder="Enter Task Title"
                            />
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="text"
                            name="description"
                            value={this.state.activeItem.description}
                            onChange={this.handleChange}
                            placeholder="Enter Task Description"
                            />
                    </FormGroup>

                    <FormGroup>
                        <Label for="priority">Priority</Label>
                        <select name="priority" value={this.state.activeItem.priority} onChange={this.handleChange}>
                          <option value="1">Low</option>
                          <option value="2">Medium</option>
                          <option value="3">High</option>
                      </select>
                    </FormGroup>

                    <FormGroup>
                        <Label for="due_date">dueDate</Label>
                        <Input
                            type="date"
                            name="dueDate"
                            value={this.state.activeItem.due_date}
                            onChange={this.handleChange}
                            placeholder="Enter Date"
                            />
                    </FormGroup>

                    <FormGroup>
                        <label for="completed">
                        <Input
                            type="checkbox"
                            name="completed"
                            checked={this.state.activeItem.completed}
                            onChange={this.handleChange}
                            />
                            Completed
                          </label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Save
              </Button>
            </ModalFooter>
            
          </Modal>     
        )
     }

}

export default TaskModal;