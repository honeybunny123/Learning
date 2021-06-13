
import React,{ useState,  } from 'react';
import { render } from 'react-dom';
import AutosizeInput from 'react-input-autosize';


class ImportCSVModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'sethuram1994@yahoo.co.in'
    }
  }
  render() {
    return (
    <AutosizeInput
      className=""
      value={this.state.value}
      onChange={event => {
        this.setState({
          value: event.target.value
        })
      }}
    />               
    )
  }
};
ReactDOM.render(<ImportCSVModal />, document.getElementById('root'));

