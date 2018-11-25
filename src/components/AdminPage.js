import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import Category from "./Category";



export default class AdminPage extends Component {

  render() {
    return (
      
      
        <div className="ui container">
          <h1 className="ui dividing header">AdminPage</h1>
          <DragDropContext onDragEnd={this.props.onDragEnd}>
          {this.props.catOrder.map(cat => {
            const category = this.props.categories[cat];
            // console.log(category);

            return (
              <Category
                key={category.id}
                catObject={category}
                items={this.props.items}
              />
            );
          })}
          </DragDropContext>
        </div>
      
    );
  }
}
