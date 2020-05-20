import React from 'react'
import slugify from 'slugify'
import Featureselected from './Featureselected';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function MainForm(props){
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map((item,csc) => {
      const itemCost = (USCurrencyFormat.format(item.cost))
      return(
          <Featureselected  
          key = {idx+csc}
          itemHash={slugify(JSON.stringify(item))}
          featureName={slugify(feature)}
          itemName = {item.name}
          selectedFeature = {props.selected[feature].name}
          refreshFeature = {props.updateFeature} 
         feature = {feature} item={item} 
         itemCost= {itemCost}  />
      )
    });

    return (

      <fieldset className="feature" key={featureHash+idx}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
return (
    <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
)
}
export default MainForm