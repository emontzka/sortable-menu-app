import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import EditMenuItem from "./EditMenuItem";

const Container = styled.div`
  margin: 10px;
  background-color: light-gray;
`;

const ItemList = styled.div`
  background-color: ${props => (props.isDraggingOver ? "#dddddd" : "#eeeeee")};
  padding: 10px;
`;

export default class EditCategory extends Component {
  render() {
    const { id, name, itemsArray } = this.props.catObject;
    const { items } = this.props.items;
    return (
      <Container className='item-list-parent'>
        <h2 className="ui header">Edit {name}s</h2>
        <Droppable droppableId={this.props.catObject.id}>
          {(provided, snapshot) => (
            <ItemList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              className='item-list'
            >
              {this.props.catObject.itemsArray.map((itemInCat, index) => (
                <EditMenuItem
                  key={itemInCat}
                  menuObj={this.props.items[itemInCat]}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </ItemList>
          )}
        </Droppable>
      </Container>
    );
  }
}
