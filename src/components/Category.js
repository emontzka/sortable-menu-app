import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components';
import MenuItem from './MenuItem'

const Container = styled.div`
margin: 10px;
background-color: light-gray;
`;

const ItemList = styled.div`
background-color: #eeeeee;
padding: 10px;
`;

export default class Category extends Component {
  render() {
    // console.log('Props: ',this.props);
    const {id, name, itemsArray} = this.props.catObject;
    const {items} = this.props.items;
    return (
      <Container>
        <h2 className="ui header">Edit {name}s</h2>
        {/* {console.log(items)} */}
        <Droppable droppableId={this.props.catObject.id}>
        {provided => (
          <ItemList
          
          ref={provided.innerRef}
          {...provided.droppableProps}>
          {this.props.catObject.itemsArray.map((itemInCat, index) => (
           
          <MenuItem key={itemInCat} menuObj={this.props.items[itemInCat]} index={index} />
          ))}
          {provided.placeholder}
          </ItemList>
          
        )}

          </Droppable>
        
          </Container>
    )
  }
}
