import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import data from "./data/mockAPI.json";

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
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
