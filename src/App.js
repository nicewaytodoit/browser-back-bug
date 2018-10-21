import React, { Component } from 'react';
import { Route, Switch, Link, Prompt } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("@ App: Constructor");
  }

  state = {
    allowBack: true,
    url: ''
  }

  componentWillMount() {
    console.log("@ App: Will Mount");
  }

  componentDidMount() {
    console.log("@ App: DID Mount");
  }

  componentWillReceiveProps() {
    console.log("@ App: Will Recieve Props");
  }

  componentWillUpdate() {
    console.log("@ App: Will Update");
  }

  componentDidUpdate() {
    console.log("@ App: DID Update");
  }

  componentWillUnmount() {
    console.log("@ App: will UN-Mount");
  }

  EchoEvent = () => {
    console.log('@ ----------------------------------------- @');
  }

  AllowBackEvent = () => {
    this.setState({ allowBack: !this.state.allowBack });
  }

  messageGetter = (allowBack) => {
    return `{
      "allowBack": ${allowBack}
    }`
  }

  render() {
    const {allowBack} = this.state;
    console.log("@ App: RENDER");


    return (
      <div className="App">
        <Prompt
          when={(!allowBack)}
          message={() => this.messageGetter(allowBack.toString())}
        />
        <h1>This is APP</h1>
        <p>[Allow Back: {allowBack.toString()} ]</p>
        <hr />
        <Link to="/first" >First</Link> |{' '}
        <Link to="/second">Second</Link> |{' '}
        <Link to="/third" >Third</Link> |{' '}
        <Link to="/forth" >Forth</Link> |{' '}
        <Link to="/fifth" >Fifth</Link> |{' '}
        <Switch>
          <Route path="/first" component={Page1} />
          <Route path="/second" component={Page2} />
          <Route path="/third" component={Page3} />
          <Route path="/forth" component={Page4} />
          <Route path="/fifth" component={Page5} />
        </Switch>
        <button onClick={this.EchoEvent}>Echo Log</button>
        <button onClick={this.AllowBackEvent}>No Back</button>
      </div>
    );
  }
}

export default App;
