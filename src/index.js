import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Preview from './components/preview';
import Textarea from './components/textarea';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({text: marked(text)});
  }

  render() {
    return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h4 className="heading">Markdown Previewer</h4>
          <p className="author">by Neptune Cabelin</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <Textarea text={this.state.text}
          changeText={this.changeText}
        />
        <Preview text={this.state.text}
          marked={marked}
        />
      </div>
      <p>Enter your markdown in the text box and see the preview instantly.</p>
      <p className="footer">Copyright 2017, Neptune Cabelin</p>
    </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
