import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import data from "./data/mockAPI.json";
import { DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import Category from "./components/Category";
import MenuPage from "./components/MenuPage";
import AdminPage from "./components/AdminPage";

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
    console.log(result);
  }


  render() {
    return (
      <Router>
        <div className="App">
          <header>Header</header>
          <Route path="/" component={MenuPage} />
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
