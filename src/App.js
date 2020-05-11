import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import Featureselected from './Featureselected';
import FeatureSummary from './FeatureSummary';
import headerFunct from './Header';
import Summarytotal from './SummaryTotal';
import MainForm from './MainForm';
import MainSummary from './MainSummary';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

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
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        const itemCost = (USCurrencyFormat.format(item.cost))
        return(
            <Featureselected  itemHash={slugify(JSON.stringify(item))}
            featureName={slugify(feature)}
            itemName = {item.name}
            selectedFeature = {this.state.selected[feature].name}
            refreshFeature = {this.updateFeature} 
           feature = {feature} item={item} 
           itemCost= {itemCost}  />
        )
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
      return (
        <FeatureSummary 
         featureoption = {featureHash}
         featureoptionlabel = {feature}
         featureoptionvalue = {selectedOption.name}
         featureoptioncost = {USCurrencyFormat.format(selectedOption.cost)}
          />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
       <headerFunct />
        <main>
          <MainForm MainFormfeatures = {features} />
          <MainSummary
            MainSummarySum = {summary} />
            <Summarytotal
            CurrancyFormat = {USCurrencyFormat.format(total)} /> 
        </main>
      </div>
    );
  }
}

export default App;
