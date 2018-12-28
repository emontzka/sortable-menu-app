import React, { Component } from 'react'
import MenuItem from './MenuItem'

export default class Category extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.catDetails.name}</h2>
        <div className="ui grid relaxed stackable">
        {this.props.catDetails.itemsArray.map( item => <MenuItem key={item}
        itemDetails={this.props.menuItems[item]}
        />)}
        </div>
      </div>
    )
  }
}
