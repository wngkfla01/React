import React, { Component } from "react";

class ChildrenCompo2 extends Component {
  render() {
    const content = this.props.children;
    return (
      <div className="ChildrenCompo2">
        <em>ChildrenCompo2</em>
        <p>내용 : {content}</p>
      </div>
    );
  }
}

export default ChildrenCompo2;
