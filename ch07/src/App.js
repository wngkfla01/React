import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LifeCycleCompo from "./components/LifeCycleCompo";

/*
  날짜 : 2020/10/21
  이름 : 주하림
  내용 : 컴포넌트 생명주기 실습하기
  컴포넌트 생명주기
   - 리액트의 모든 컴포넌트는 초기화(Mount) 단계, 업데이트(Update) 단계, 소멸(Unmount)단계를 거친다.
   - 각 단계 별로 자동으로 실행되는 함수를 생명주기 함수라고 한다.
   - 생명주기 함수는 클래스 컴포넌트에서만 동작한다.
  초기화(Mount) 단계
   - DOM이 생성되고 브라우저에 컴포넌트가 나타나는 단계
   - constructor -> getDerivedStateFromProps -> render -> componentDidMount 순서로 실행
  업데이트(Update) 단계
   - 초기화 단계와 소멸단계 사이에서 반복되는 단계
   - 컴포넌트의 속성값(props), 상태값(state)이 변경되면 자동으로 업데이트 함수 실행
   - getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate 순서로 실행
  소멸(Unmount)단계
   - 마운트 단계의 반대과정으로 컴포넌트가 브라우저에서 제거될때 실행되는 단계
   - componentWillUnmount 함수 실행
*/

class App extends Component {
  // ref생성
  inputRef = React.createRef();
  compoRef = React.createRef();

  // 상태값 생성
  state = { tit: "제목입력" };

  onClickHandler1 = () => {
    this.setState({ tit: this.inputRef.current.value });
  };

  onClickHandler2 = () => {
    //this.compoRef.current.
  };

  render() {
    return (
      <div>
        <h3>ch07.리액트 컴포넌트 생명주기</h3>

        <input type="text" ref={this.inputRef} />
        <button onClick={this.onClickHandler1}>입력</button>
        <p>입력 : {this.state.tit}</p>

        <LifeCycleCompo ref={this.compoRef} tit={this.state.tit} />
        <button onClick={this.onClickHandler2}>제거</button>
      </div>
    );
  }
}

export default App;
