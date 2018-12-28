import React, { Component } from 'react'
import styled from 'styled-components';
import { Modal, ModalContent, Icon, Input, Button, Segment, Form } from 'semantic-ui-react'

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.setModalRef = element => {
      this.modalRef = element
    }
    this.state = {
      isOpen: false
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(e) {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }
  
  render() {
    const segmentStyle = {
      width: '350px',
      backgroundColor: 'white',
      margin: '10px'
    }
    return (
      // <div eight wide column stackable>
        <Modal
        ref={this.setModalRef}
        
        trigger={<Segment style={segmentStyle}>
          <span>{this.props.itemDetails.name}</span>
          <span>{this.props.itemDetails.price}</span>
        </Segment>}>
        <ModalContent>
          {this.props.itemDetails.name}
        </ModalContent>
        </Modal>
      // </div>
    )
  }
}
