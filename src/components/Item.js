import React from "react";
import axios from "axios";

export class Item extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        <b>{item.title}</b>
      </div>
    );
  }
}
