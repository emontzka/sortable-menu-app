import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import EditCategory from "./EditCategory";

const CategoryParent = styled.div`
  display: flex;
`;

export default class AdminPage extends Component {
  render() {
    return (
      <div className="ui container">
        <h1 className="ui dividing header">AdminPage</h1>
        <CategoryParent className="category-parent">
        <DragDropContext onDragEnd={this.props.onDragEnd} className='D-d-context'>
        
          {this.props.catOrder.map(cat => {
            const category = this.props.categories[cat];

            return (
              
              <EditCategory
                key={category.id}
                catObject={category}
                items={this.props.items}
              />
              
            );
          })}
        </DragDropContext>
        </CategoryParent>
      </div>
    );
  }
}
