import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
background-color: white;
margin: 10px;
min-height: 80px;
`;

export default class MenuItem extends Component {
  render() {
    console.log(this.props);
    return (
      
      <Draggable draggableId={this.props.menuObj.id} index={this.props.index}>
        {provided => 
        <Container 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}  
        ref={provided.innerRef} 
        className="one column row "
        >{this.props.menuObj.name}
        </Container>}
      </Draggable>

    )
  }
}
