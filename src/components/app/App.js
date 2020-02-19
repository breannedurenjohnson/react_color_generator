import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import './App.css';

class Random extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: [65, 182, 255] };
    this.handleClick = 
      this.handleClick.bind(this);
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }
  
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  formatColor2(ary) {
    return 'rgba(' + ary.join(', ') + ', 0.7)';
  }

  formatColor3(ary) {
    return 'rgba(' + ary.join(', ') + ', 0.3)';
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.getElementById('color1').style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  
  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }

  render() {
    return (
      <div>
        <div id="colors">
          <div id="color1"></div>
          <div id="color2" style={{background: this.formatColor2(this.state.color)}}></div>
          <div id="color3" style={{background: this.formatColor3(this.state.color)}}></div>
        <p>{this.formatColor(this.state.color)}</p>
        </div>
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('root')
);

export default Random;
