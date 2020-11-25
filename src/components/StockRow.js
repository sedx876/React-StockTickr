import React, { Component } from 'react'

class StockRow extends Component {

  render() {
    return(
      <tr>
        <td>{this.props.ticker}</td>
        <td>Yo</td>
        <td>Wassup</td>
        <td>Hola</td>
      </tr>
    )
  }
}

export default StockRow
