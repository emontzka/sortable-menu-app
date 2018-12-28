import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import Category from './Category'


export default class MenuPage extends Component {
  render() {
    return (
      <div>
        MenuPage
      
      {this.props.catOrder.map(cat => <Category key={cat}
      catDetails={this.props.categories[cat]}
      menuItems={this.props.items} />)}
        
      </div>
    )
  }
}
