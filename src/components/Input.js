import React from 'react';
import {connect} from 'react-redux';
import './Input.css';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      inputFigure: '',
      inputSize: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange() {
    const $select = document.querySelector(".figure");
    
    this.setState({inputFigure: $select.options[$select.selectedIndex].value});
    
  }

  onChangeSize(event) {
  
    this.setState({inputSize: event.target.value});

    const $select = document.querySelector(".figure");
    
    this.setState({inputFigure: $select.options[$select.selectedIndex].value});
    
  }

  onSubmit() {
    const {
      onFigure, onSize, onNumber
    } = this.props;
        
    const {
      inputFigure, inputSize
    } = this.state;

    const $select = document.querySelector(".figure");
    
    this.setState({inputFigure: $select.options[$select.selectedIndex].value});
    
    onFigure(inputFigure);
    onSize(inputSize);
    onNumber();
  }

  render() {
   
    return (
      <div className="inputForm">
        <ul>
          <li>
            <select name="figure" className="figure" onChange={this.onChange} value={this.state.inputFigure}>
              <option value="select">select</option>  
              <option value="cube">cube</option>
              <option value="pyramide">pyramide</option>
              <option value="sphere">sphere</option>
			      </select>
          </li>
          <li>
            <input type="text" className="size" placeholder="size" value={this.state.inputSize} onChange={this.onChangeSize}/>
          </li>
          <li>
            <button type="submit" className="submit" onClick={this.onSubmit}>create</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    onFigure: (figure) => dispatch({type: 'FIGURE', payload: figure}),
    onSize: (size) => dispatch({type: 'SIZE', payload: size}),
    onNumber: () => dispatch({type: 'NUM', }),
  }),
)(Input);
