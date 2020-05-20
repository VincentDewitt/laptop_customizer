import React from 'react'
import FeatureSummary from './FeatureSummary'
import Summarytotal from './SummaryTotal';

function MainSummary(props){
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
          <FeatureSummary 
           key = {idx+"f"}
           featureoption = {featureHash}
           featureoptionlabel = {feature}
           featureoptionvalue = {selectedOption.name}
           featureoptioncost = {USCurrencyFormat.format(selectedOption.cost)}
            />
        );
      });
    return (
    <section className="main__summary">
    <h2>Your cart</h2>
    {summary}
    <Summarytotal CurrancyFormat = {USCurrencyFormat.format(props.total)}
    total= {props.total} />
    </section>

)
} 
export default MainSummary
