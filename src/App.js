import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import data from "./data/mockAPI.json";
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import Category from "./components/EditCategory";
import MenuPage from "./components/MenuPage";
import AdminPage from "./components/AdminPage";

const Links = () => (
  <nav className='ui three item menu'>
    <Link className='active item' to="/">Menu</Link>
    <Link className='item' to="/order">Order</Link>
    <Link className='item' to="/admin">Admin</Link>
  </nav>
)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      categories: {},
      catOrder: []
    };
  }

  componentDidMount() {
    this.setState({
      items: data.items,
      categories: data.categories,
      catOrder: data.catOrder
    });
  }

 onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(result);
    console.log(result.draggableId)
    
    if (!destination) {
      return;
    }
    // Return if item is dropped in original location
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.categories[source.droppableId];
    const finish = this.state.categories[destination.droppableId];

    if (start === finish) {
      console.log('dest is ',finish);
      const newMenuIds = Array.from(start.itemsArray);
      newMenuIds.splice(source.index, 1);
      newMenuIds.splice(destination.index, 0, draggableId);
      console.log('newMenuIds ', newMenuIds);
  
      const newCat = {
        ...start,
        itemsArray: newMenuIds,
      };
      console.log('newCat:',newCat);
  
      const newState = {
        ...this.state,
        categories: {
          ...this.state.categories,
          [newCat.id] : newCat,
        },
      };
  
      this.setState(newState);
      return;
    }
    //Handle item moved to new category
    // const newMenuItems = {
    //   ...items,
    //   items[draggableId].category: destination.droppableId
    // }

    const newItem = {
      ...this.state.items[draggableId],
      category: this.state.categories[destination.droppableId].name
    }
    console.log('new item', newItem);



    const startItemsArray = Array.from(start.itemsArray);
    startItemsArray.splice(source.index, 1);
    const newStart = {
      ...start,
      itemsArray: startItemsArray
    }
    const finishItemsArray = Array.from(finish.itemsArray);
    console.log('finishedItemsArray ', finishItemsArray)
    finishItemsArray.splice(destination.index,0, draggableId);
    const newFinish = {
      ...finish,
      itemsArray: finishItemsArray,
    }

    const newState = {
      ...this.state,
      categories: {
        ...this.state.categories,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
      items: {
        ...this.state.items,
        [newItem.id]: newItem
      }
    };

    this.setState(newState);
 
  };


  render() {
    return (
      <Router>
        <div className="App">
          <header>Header</header>
          <Links />
          <Route exact path="/" 
          render={() => (
            <MenuPage
              items={this.state.items}
              categories={this.state.categories}
              catOrder={this.state.catOrder}
            />
          )} />
          <Route
            path="/admin"
            render={() => (
              <AdminPage
                items={this.state.items}
                categories={this.state.categories}
                catOrder={this.state.catOrder}
                onDragEnd={this.onDragEnd}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
