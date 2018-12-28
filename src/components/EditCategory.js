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
      <Container>
        <h2 className="ui header">Edit {name}s</h2>
        <Droppable droppableId={this.props.catObject.id}>
          {(provided, snapshot) => (
            <ItemList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
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
