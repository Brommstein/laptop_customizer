import React from 'react';
import Parts from './Parts';
import slugify from 'slugify';

export default function specs(props) {
  const options = props.FEATURES[props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <Parts 
      key={itemHash} 
      itemHash={itemHash} 
      feature={props.feature} 
      item={item} 
      selected={props.selected} 
      updateFeature={props.updateFeature} 
      onChange={e => props.updateFeature(props.feature, item)}
      USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });
  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  )
}