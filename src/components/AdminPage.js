import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import Category from "./Category";



export default class AdminPage extends Component {



  // onDragEnd = result => {
  //   const { destination, source, draggableId } = result;
    
  //   if (!destination) {
  //     return;
  //   }
  //   // Return if item is dropped in original location
  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }

  //   const catSource = this.state.categories[source.droppableId];
  //   const newMenuIds = Array.from(catSource.itemsArray);
  //   newMenuIds.splice(source.index, 1);
  //   newMenuIds.splice(destination.index, 0, draggableId);

  //   const newCat = {
  //     ...catSource,
  //     itemsArray: newMenuIds,
  //   };

  //   const newState = {
  //     ...this.state,
  //     categories: {
  //       ...this.state.categories,
  //       [newCat.id] : newCat
  //     },
  //   };

  //   this.setState(newState);
  //};

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
