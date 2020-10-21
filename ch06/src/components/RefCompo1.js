import React, { Component } from "react";

class RefCompo1 extends Component {
  // ref속성값 생성
  uidRef = React.createRef();

  onclickHandler1 = () => {
    document.getElementById("uid").focus();
  };

  onclickHandler2 = () => {
    this.uidRef.current.focus();
  };

  render() {
    return (
      <div className="RefCompo1">
        <strong>RefCompo1</strong>
        <br />

        {/* DOM 식별값을 id로 지정 */}
        <input type="text" name="uid" id="uid" />
        <button onClick={this.onclickHandler1}>선택</button>

        {/* DOM 식별값을 id로 지정 */}
        <input type="text" name="uid" ref={this.uidRef} />
        <button onClick={this.onclickHandler2}>선택</button>
      </div>
    );
  }
}

export default RefCompo1;
