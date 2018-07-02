import * as React from 'react';
import Perceptron from '../src/Perceptron';
import { Trainer } from 'synaptic';

export default class Examples extends React.Component<any,any> {
	constructor(props) {
    	super(props);
		let myPerceptron = new Perceptron(2,2,1);
		myPerceptron.connectLayers();
		const myTrainer = new Trainer(myPerceptron);
		const trainer = myTrainer.XOR();
		this.state = {
			perceptron: myPerceptron,
		};
  }

  render() {
    return (
	    <div>
	     Examples

		<h1>Synaptic examples</h1>
		<div>{this.state.perceptron.activate([0,0])}</div><div></div>
		<div>{this.state.perceptron.activate([1,0])}</div><div></div>
	      	<div>{this.state.perceptron.activate([0,1])}</div><div></div>
	      	<div>{this.state.perceptron.activate([1,1])}</div><div></div>
	    </div>
    );
  }
}