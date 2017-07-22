import React, { Component} from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.text };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({value:e.target.value})
    this.props.changeText(e.target.value);
  }

  render() {
    return (
      <div className="col-md-6 well">
        <textarea
          rows="20"
          onChange={(e) => this.changeValue(e)}
          value={this.state.value}
        />
      </div>
    );
  }
};

export default Textarea;
