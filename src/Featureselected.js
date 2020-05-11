import React from 'react';

 function Featureselected(props){
      const itemHash = props.itemHash
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={props.featureName}
            checked={props.itemName === props.selectedFeature}
            onChange={e => props.refreshFeature (props.feature, props.item) }
          />
          <label htmlFor={itemHash} className="feature__label">
            {props.itemName} ({props.itemCost})
          </label>
        </div>
        
    );
      }
      export default Featureselected    
