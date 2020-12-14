import React, { Component } from 'react';
import HEADER from './Header';
import MAINFORM from './MainForm';
import MAINSUMMARY from './MainSummary';
import SPECS from './Specs';
import PARTS from './Parts';
import OPTION from './Option';
import STORE from './STORE'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(STORE.FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = STORE.FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <PARTS itemHash={itemHash} feature={feature} item={item} selected={this.state.selected} update={this} />
        );
      });

      return (
        <SPECS featureHash={featureHash} feature={feature} options={options} />
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <OPTION featureHash={featureHash} feature={feature} selectedOption={selectedOption} />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <HEADER />
        <main>
          <MAINFORM features={features} />
          <MAINSUMMARY summary={summary} total={total} />
        </main>
      </div>
    );
  }
}

export default App;
