import React from 'react'

function Summarytotal(props){
    return (
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {props.CurrancyFormat}
              </div>
            </div>
    )
}

export default Summarytotal