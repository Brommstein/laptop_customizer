import React from 'react';
import Specs from './Specs';
import Store from './STORE';

export default function mainForm(props) {
    const features = Object.keys(Store.FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;  
        return (
          <Specs
          key={featureHash} 
          featureHash={featureHash} 
          feature={feature} 
          updateFeature={props.updateFeature}
          FEATURES={Store.FEATURES}
          USCurrencyFormat={props.USCurrencyFormat}
          selected={props.selected}
           />
        );
      });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}