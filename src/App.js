import './App.css';
import Card from './Card';
import { Component } from "react";

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			theme: 'rgb(0,0,0)'
		}
		this.onThemeChange = this.onThemeChange.bind(this);
	}

	onThemeChange = (theme) => {
		this.setState({theme: theme});
	}
  render() {
	return (
	  <div className="App" style={{backgroundColor: this.state.theme}}>
		<Card theme={this.state.theme} onParentThemeChange={this.onThemeChange}/>
		<div id='by'>
			<span><a href='https://github.com/satyamrs00'>satyam</a></span>
		</div>
	  </div>
	);
  }
}

export default App;
