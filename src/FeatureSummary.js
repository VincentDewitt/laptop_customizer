import React from 'react'

function FeatureSummary (props) {
    return (
        <div className="summary__option" key={props.featureoption}>
          <div className="summary__option__label">{props.featureoptionlabel} </div>
          <div className="summary__option__value">{props.featureoptionvalue}</div>
          <div className="summary__option__cost">
            {props.featureoptioncost}
          </div>
        </div>
      );
}
export default FeatureSummary