import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
background-color: ${props => (props.isDragging ? 'lightgray' : 'white')};
margin: 10px;
padding: 20px 50px 20px 20px;
border: ${props => (props.isDragging ? '1px dotted gray' : 'none')};
`;

export default class MenuItem extends Component {
  render() {
    return (
      
      <Draggable draggableId={this.props.menuObj.id} index={this.props.index}>
        {(provided, snapshot) => 
        <Container 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}  
        ref={provided.innerRef} 
        isDragging={snapshot.isDragging}
        className="styled-container"
        >{this.props.menuObj.name}
        </Container>}
      </Draggable>

    )
  }
}
